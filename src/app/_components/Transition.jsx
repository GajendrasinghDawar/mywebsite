"use client";

import { motion } from "framer-motion";

export function Transition({ children }) {
    return (
        <motion.div
            initial={ { opacity: 0, y: 1 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: -1 } }
            transition={ { duration: 0.2 } }
        >
            { children }
        </motion.div>
    )
}