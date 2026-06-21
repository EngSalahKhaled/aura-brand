import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, SectionTitle, LegalParagraph, LegalList } from "@/components/ui/PageComponents";

export const metadata: Metadata = {
  title: "الشحن والتوصيل | AURA",
  description: "تفاصيل الشحن والتوصيل لطلبات دار AURA داخل مصر ومتابعة الطلبات الخاصة.",
};

export default function ShippingPage() {
  return (
    <LegalPageLayout
      title="الشحن والتوصيل"
      subtitle="نهتم بوصول قطع AURA إليكِ بتغليف آمن وتجربة تسليم تليق بقيمة القطعة."
      lastUpdated="يونيو ٢٠٢٦"
    >
      <SectionTitle number="01" title="نطاق التوصيل" />
      <LegalParagraph>تقدم AURA خدمة التوصيل إلى جميع محافظات مصر، مع مراجعة العنوان وتفاصيل التواصل قبل تسليم الطلب لشريك الشحن.</LegalParagraph>
      <LegalList items={["الشحن مجاني لجميع الطلبات داخل مصر.", "تأكيد الطلب يتم عبر مستشارة AURA قبل بدء التجهيز.", "يمكن طلب تنسيق موعد تسليم مناسب عبر واتساب."]} />

      <SectionTitle number="02" title="مدة التجهيز والتسليم" />
      <LegalParagraph>القطع الجاهزة تُجهز عادة خلال 24 إلى 48 ساعة. القطع التي تحتاج ضبط مقاس أو مراجعة أتيلييه قد تستغرق من 3 إلى 7 أيام عمل قبل الشحن.</LegalParagraph>
      <LegalList items={["القاهرة والإسكندرية: غالبًا خلال 2 إلى 3 أيام عمل بعد الجاهزية.", "باقي المحافظات: غالبًا خلال 3 إلى 5 أيام عمل بعد الجاهزية.", "طلبات المناسبات العاجلة تُراجع بشكل فردي حسب توفر القطعة."]} />

      <SectionTitle number="03" title="متابعة الطلب" />
      <LegalParagraph>بعد اعتماد الطلب، يصلكِ رقم مرجعي لمتابعة حالة التجهيز والتسليم من صفحة تتبع الطلب أو عبر مستشارة AURA.</LegalParagraph>
      <Link href="/tracking" className="font-sans text-xs text-accent underline underline-offset-4">الانتقال إلى تتبع الطلب</Link>
    </LegalPageLayout>
  );
}