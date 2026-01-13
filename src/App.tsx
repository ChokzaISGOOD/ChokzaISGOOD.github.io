import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Sparkles, 
  Rocket, 
  ShieldAlert, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  ChevronDown,
  Wand2,
  Terminal,
  Cpu
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-ms-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-ms-blue" />
              <span className="font-bold text-xl tracking-tight text-slate-800">Tanawat.AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-ms-blue transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-slate-50/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
              <img 
                src="/images/profile.jpg" 
                alt="Tanawat Aimdacha" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Tanawat Aimdacha
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Future AI Engineer at Microsoft
            <span className="block text-base mt-2 text-ms-blue font-medium">
              Transforming Chaos into Clean Code (and Clean Floors)
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-ms-blue text-white rounded-md font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View Projects <Code2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-md font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-ms-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
             <img 
              src="/images/nasa.jpg" 
              alt="NASA Experience" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <p className="text-white font-medium">Previous workstation: NASA Space Station</p>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              สวัสดีครับ ผมชื่อธนวัฒน์ วิศวกร AI ที่มีความหลงใหลในการสร้างสรรค์เทคโนโลยีที่ชาญฉลาด 
              ด้วยพื้นฐานที่ไม่เหมือนใครจากประสบการณ์การทำงานที่ <span className="font-bold text-ms-blue">NASA</span> 
              ในฐานะผู้เชี่ยวชาญด้านการจัดการสุขอนามัยในสภาวะไร้น้ำหนัก (Housekeeping Specialist)
            </p>
            <p>
              ผมได้เรียนรู้ระเบียบวินัยขั้นสูงและความละเอียดรอบคอบ ซึ่งผมนำมาประยุกต์ใช้กับการเขียน Code และการเทรน Model AI 
              เป้าหมายของผมคือการนำประสบการณ์ระดับจักรวาลและเวทมนตร์มาช่วยพัฒนา Microsoft ให้ก้าวไปข้างหน้า
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Brain className="text-ms-blue" /> AI/ML Expert
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Sparkles className="text-ms-blue" /> Cleaning Pro
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
            {/* Job 1 */}
            <motion.div {...fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ms-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-slate-900">Orbital Hygiene Technician (Housekeeper)</h3>
                  <span className="text-sm font-medium text-ms-blue bg-blue-50 px-2 py-1 rounded">2020 - 2023</span>
                </div>
                <h4 className="text-slate-600 mb-4 font-medium">NASA (National Aeronautics and Space Administration)</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                  <li>รับผิดชอบความสะอาดของสถานีอวกาศด้วยมาตรฐาน Zero-G</li>
                  <li>ใช้ AI ในการคำนวณวิถีฝุ่นเพื่อการกวาดที่แม่นยำที่สุด</li>
                  <li>เพิ่มประสิทธิภาพความเงาของพื้นยาน 300%</li>
                </ul>
              </div>
            </motion.div>

            {/* Job 2 */}
            <motion.div {...fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-slate-900">Freelance Defense Consultant</h3>
                  <span className="text-sm font-medium text-ms-blue bg-blue-50 px-2 py-1 rounded">2019</span>
                </div>
                <h4 className="text-slate-600 mb-4 font-medium">Classified Location</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                  <li>เผชิญหน้าและยับยั้งภัยคุกคามระดับ Lord (ไม่ระบุนาม)</li>
                  <li>ใช้ทักษะการต่อสู้ระยะประชิด (CQC) ผสมผสานกับเวทมนตร์</li>
                  <li>ปกป้องความสงบสุขของโลกเวทมนตร์สำเร็จ</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-slate-900 text-white rounded-3xl my-20">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical & Special Skills</h2>
          <div className="w-20 h-1 bg-ms-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Brain />, name: "Machine Learning", level: "Expert" },
            { icon: <Code2 />, name: "Python / PyTorch", level: "Advanced" },
            { icon: <Sparkles />, name: "Advanced Mopping", level: "Legendary" },
            { icon: <ShieldAlert />, name: "Combat Strategy", level: "Proven" },
            { icon: <Terminal />, name: "Full Stack Dev", level: "Intermediate" },
            { icon: <Cpu />, name: "Neural Networks", level: "Expert" },
            { icon: <Wand2 />, name: "Defense Arts", level: "Master" },
            { icon: <Rocket />, name: "Space Safety", level: "Certified" },
          ].map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-ms-blue mb-4 flex justify-center w-8 h-8 mx-auto [&>svg]:w-full [&>svg]:h-full">{skill.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-padding">
        <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20">
             <img src="/images/hogwarts.jpg" alt="Hogwarts" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 p-12 text-center text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-ms-blue" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hogwarts School of Witchcraft and Wizardry</h2>
            <p className="text-xl text-blue-200 mb-6">Bachelor of Magic in Defense Against the Dark Arts</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/20">GPA: 4.0 (Outstanding)</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/20">Prefect</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/20">Dueling Club Champion</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-20">
        <div className="section-padding">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 group-hover:opacity-90 transition-opacity" />
                <Brain className="text-white w-16 h-16 relative z-10" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sentient Floor Analyzer</h3>
                <p className="text-slate-600 mb-6">
                  ระบบ AI ตรวจจับคราบสกปรกระดับไมครอนบนพื้นสถานีอวกาศ ใช้ Computer Vision 
                  ร่วมกับ Reinforcement Learning เพื่อสั่งการหุ่นยนต์ถูพื้น (หรือตัวผมเอง)
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">Python</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">TensorFlow</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">OpenCV</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-black opacity-80 group-hover:opacity-90 transition-opacity" />
                <Wand2 className="text-white w-16 h-16 relative z-10" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Dark Arts Predictor</h3>
                <p className="text-slate-600 mb-6">
                  โมเดลทำนายพฤติกรรมของจอมมาร (Dark Lords) โดยวิเคราะห์จาก Pattern การร่ายคาถา 
                  และความผันผวนของพลังเวทย์ ช่วยลดอัตราการบาดเจ็บได้ 95%
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">LSTMs</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">Magic Data</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">Azure Cloud</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding mb-20">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Join Microsoft</h2>
          <p className="text-lg text-slate-600 mb-8">
            หากคุณกำลังมองหาวิศวกรที่เขียน Code ได้สะอาดพอๆ กับพื้นห้อง<br/>
            ติดต่อผมได้ทันทีครับ
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              <Mail className="w-5 h-5" /> tanawat@hogwarts.edu
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              <Github className="w-5 h-5" /> Github Profile
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>&copy; 2026 Tanawat Aimdacha. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Designed with Microsoft Fluent Design Principles (and Magic)</p>
      </footer>
    </div>
  )
}