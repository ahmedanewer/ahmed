import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/config/services.data";
import SingleServiceView from "@/components/services/SingleServiceView";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: `${service.title.ar} | مصنع أحمد عبد الصمد للألمنيوم والزجاج بجدة`,
    description: service.shortDesc.ar,
  };
}

export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <SingleServiceView service={service} />;
}
