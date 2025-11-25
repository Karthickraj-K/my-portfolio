import { motion } from "framer-motion";

const FloatingItem = ({ text, x, y, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 0.3, y: -10 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay }}
      style={{ position: "absolute", left: x, top: y, fontSize: "50px", color: "#000", userSelect: "none", zIndex: 1, }}>
      <img src={text} alt={text} />
    </motion.div>
  );
};

export default FloatingItem;
