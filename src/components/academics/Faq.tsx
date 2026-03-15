import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: 'What curriculum do you follow?',
    a: 'We follow a structured school curriculum with concept clarity, practical exposure, and regular assessment support.',
  },
  {
    q: 'How is student progress monitored?',
    a: 'Through routine class assessments, exams, PTM interaction, and continuous teacher feedback.',
  },
  {
    q: 'Do you support board exam preparation?',
    a: 'Yes. We provide focused preparation, revision routines, and mentoring for board classes.',
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50/35">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="scene-label mb-4">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Common Academic Questions</h2>
        </motion.div>

        <div className="interactive-card rounded-3xl border border-red-200 bg-white shadow-md p-4 md:p-6">
          <Accordion type="single" collapsible>
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-red-100">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base font-medium">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <Button asChild className="interactive-cta rounded-2xl bg-gradient-to-r from-school-blue to-school-blue-dark text-white h-12 px-7 text-base font-bold">
            <Link to="/enquire">Talk To Academic Office</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
