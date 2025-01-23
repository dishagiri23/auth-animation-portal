import { AuthForm } from "@/components/AuthForm";
import { PreviewSection } from "@/components/PreviewSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col lg:flex-row"
    >
      <div className="flex-1 flex items-center justify-center p-8">
        <AuthForm />
      </div>
      <div className="flex-1 bg-gradient-to-br from-black to-gray-900">
        <PreviewSection />
      </div>
    </motion.div>
  );
};

export default Index;