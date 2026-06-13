import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../utils/animations";
import Container from "../common/Container";
import PageHeader from "../common/PageHeader";

export default function AboutLawal(){
    return (
    <>
    <PageHeader
            eyebrow="Our story"
            title={
              <>
                About LawalX – Website Designer in{" "}
                <span className="grad-text">Lagos</span>
              </>
            }
            subtitle="LawalX is a modern designer in Lagos and across Nigeria dedicated to helping businesses and startups establish a powerful digital presence. We blend creativity, code, and strategy to deliver websites that convert. We are one of the top 3 in web development in nigeria."
          />


           <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl">Our mission</h3>
              <p className="mt-4 leading-relaxed text-neutral-500 dark:text-neutral-400">
                We create powerful, user-friendly, and innovative digital
                solutions that help businesses succeed online.
              </p>
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl">Our vision</h3>
              <p className="mt-4 leading-relaxed text-neutral-500 dark:text-neutral-400">
                To be a global leader in web solutions, empowering businesses
                with technology that drives growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
    )
}