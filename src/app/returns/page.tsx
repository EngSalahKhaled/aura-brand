import type { Metadata } from "next";
import { LegalPageLayout, SectionTitle, LegalParagraph, LegalList } from "@/components/ui/PageComponents";

export const metadata: Metadata = {
  title: "الاستبدال والإرجاع | AURA",
  description: "سياسة الاستبدال والإرجاع لقطع AURA الجاهزة والطلبات التي يتم ضبطها حسب المقاس.",
};

export default function ReturnsPage() {
  return (
    <LegalPageLayout
      title="الاستبدال والإرجاع"
      subtitle="نراجع كل طلب بعناية لضمان وضوح المقاس والخامة قبل التأكيد، ونوفر دعمًا عادلاً بعد الاستلام."
      lastUpdated="يونيو ٢٠٢٦"
    >
      <SectionTitle number="01" title="القطع الجاهزة" />
      <LegalParagraph>يمكن طلب الاستبدال خلال 7 أيام من تاريخ الاستلام إذا كانت القطعة بحالتها الأصلية وغير مستخدمة وبكامل التغليف.</LegalParagraph>
      <LegalList items={["يُقبل الاستبدال عند اختلاف المقاس أو اللون حسب التوفر.", "يجب أن تكون بطاقة AURA والتغليف الأصلي بحالة سليمة.", "تتم مراجعة الطلب عبر واتساب قبل اعتماد الاستبدال."]} />

      <SectionTitle number="02" title="القطع المضبوطة حسب المقاس" />
      <LegalParagraph>القطع التي يتم ضبطها بناءً على قياسات العميلة لا تُرجع إلا في حال وجود خطأ من جانب AURA أو عيب في الخامة أو الخياطة.</LegalParagraph>
      <LegalList items={["نراجع القياسات قبل التجهيز لتقليل احتمالات الخطأ.", "أي ملاحظة على الخياطة تُرسل خلال 48 ساعة من الاستلام.", "نوفر مراجعة أتيلييه للحالات التي تحتاج ضبطًا بسيطًا متى أمكن."]} />

      <SectionTitle number="03" title="طريقة تقديم الطلب" />
      <LegalParagraph>أرسلي رقم الطلب وصور القطعة والتغليف إلى مستشارة AURA عبر واتساب، وسيتم الرد بخطوات الاستبدال أو المراجعة خلال يوم عمل.</LegalParagraph>
    </LegalPageLayout>
  );
}