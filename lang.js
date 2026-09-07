// ==========================================
// Language Toggle System (EN ↔ TH)
// ==========================================

(function () {
    'use strict';

    // --- Translation Dictionary ---
    const T = {
        // ===================== INDEX.HTML =====================
        // Professional Summary
        'idx.summary.title': {
            en: 'Professional Summary',
            th: 'สรุปประสบการณ์และความเชี่ยวชาญ'
        },
        'idx.summary.text': {
            en: 'Computer Science student and Developer with strong expertise in Full Stack Development, Mobile Applications, and Quantitative / Algorithmic Trading Systems. Experienced in developing institutional-grade trading systems (MQL5 / C++), deploying on-edge Machine Learning models via ONNX Runtime, and building scalable full-stack web and mobile applications.',
            th: 'นักศึกษาวิทยาการคอมพิวเตอร์ มีความเชี่ยวชาญด้าน Full Stack Development, การพัฒนา Mobile App และระบบเทรดอัตโนมัติเชิงปริมาณ มีประสบการณ์ในการพัฒนาระบบเทรดระดับสถาบัน (MQL5 / C++), การ Deploy โมเดล Machine Learning ผ่าน ONNX Runtime และการสร้าง Web/Mobile Application แบบ Full-Stack ที่รองรับการขยายตัว'
        },

        // Hero (redesign additions — UI chrome only, no invented facts)
        'hero.role': {
            en: 'Full-Stack Developer & Quant Systems Engineer',
            th: 'นักพัฒนา Full-Stack และวิศวกรระบบเทรดเชิงปริมาณ'
        },
        'hero.cta.projects': { en: 'View Projects', th: 'ดูผลงาน' },
        'hero.cta.contact': { en: 'Get in Touch', th: 'ติดต่อ' },
        'hero.meta.location': { en: 'Location', th: 'ที่อยู่' },
        'hero.meta.status': { en: 'Status', th: 'สถานะ' },
        'hero.meta.focus': { en: 'Focus', th: 'ความเชี่ยวชาญ' },

        // Skills
        'idx.skills.title': { en: 'Skills', th: 'ทักษะ' },
        'idx.skills.frontend': { en: 'Frontend', th: 'Frontend' },
        'idx.skills.backend': { en: 'Backend & Systems', th: 'Backend และระบบ' },
        'idx.skills.tools': { en: 'Tools & AI / Quant', th: 'เครื่องมือ & AI / Quant' },
        'idx.stacks.title': { en: 'Technology Stacks', th: 'ชุดเทคโนโลยีที่ใช้งาน' },

        // Education
        'idx.edu.title': { en: 'Education', th: 'การศึกษา' },
        'idx.edu.degree': { en: 'Bachelor of Science (BSc)', th: 'วิทยาศาสตรบัณฑิต (วท.บ.)' },
        'idx.edu.major': { en: 'Computer Science', th: 'วิทยาการคอมพิวเตอร์' },
        'idx.edu.date': { en: '2024 - Present', th: '2567 - ปัจจุบัน' },
        'idx.edu.uni': {
            en: "King Mongkut's Institute of Technology Ladkrabang",
            th: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'
        },
        'idx.edu.faculty.label': { en: 'Faculty:', th: 'คณะ:' },
        'idx.edu.faculty.value': { en: 'Faculty of Science', th: 'คณะวิทยาศาสตร์' },
        'idx.edu.year.label': { en: 'Year:', th: 'ชั้นปี:' },

        // Projects
        'idx.proj.title': { en: 'Featured Projects', th: 'ผลงานโปรเจกต์' },

        // Senior Project Group
        'idx.proj.senior.group': {
            en: 'Senior Project / Special Problem (ปัญหาพิเศษ)',
            th: 'ปัญหาพิเศษ (Senior Project)'
        },
        'idx.proj.senior.badge': {
            en: 'Senior Capstone / ปัญหาพิเศษ',
            th: 'ปัญหาพิเศษ'
        },
        'idx.proj.senior.btn': {
            en: 'View Senior Project Details →',
            th: 'ดูรายละเอียดปัญหาพิเศษ →'
        },

        // Quant Group
        'idx.proj.quant.group': {
            en: 'Quantitative AI & Algorithmic Trading Systems',
            th: 'ระบบเทรดอัตโนมัติเชิงปริมาณ & AI'
        },
        'idx.proj.gs.badge': { en: 'AI Quant Trading Engine', th: 'AI Quant Trading Engine' },
        'idx.proj.gs.title': {
            en: 'GoldSniper AI: Multi-Scale Machine Learning Trading Engine',
            th: 'GoldSniper AI: ระบบเทรดอัจฉริยะ Multi-Scale Machine Learning'
        },
        'idx.proj.gs.f1': {
            en: '<strong>Hierarchical Multi-Scale ML Architecture:</strong> 3 concurrent models (Micro H1/M15/M5, Swing H4/M30/M15, Macro D1/H4/H1) for regime classification (Bull/Bear/Sideway)',
            th: '<strong>สถาปัตยกรรม ML หลายระดับ:</strong> รันโมเดลพร้อมกัน 3 ตัว (Micro H1/M15/M5, Swing H4/M30/M15, Macro D1/H4/H1) สำหรับจำแนกสภาวะตลาด (Bull/Bear/Sideway)'
        },
        'idx.proj.gs.f2': {
            en: '<strong>Native ONNX In-Memory Inference:</strong> Zero-latency direct model execution inside MetaTrader 5 / MQL5 runtime without subprocess or API overhead',
            th: '<strong>ONNX In-Memory Inference:</strong> รันโมเดลตรงใน MetaTrader 5 / MQL5 ไม่ต้องเรียก API ภายนอก ไม่มี latency จาก subprocess'
        },
        'idx.proj.gs.f3': {
            en: '<strong>Dual Execution Engines:</strong> Dynamic ATR Trend Scalper & Prior-Trend Sideway Martingale Grid with AI Reversal Killer',
            th: '<strong>Dual Execution Engines:</strong> ATR Trend Scalper แบบ Dynamic และ Sideway Martingale Grid พร้อม AI Reversal Killer'
        },
        'idx.proj.gs.f4': {
            en: '<strong>Institutional Risk & Defense:</strong> 5-Pillar safety defense including Daily Soft/Hard Circuit Breakers, News Event Blackout Shield, and Global Basket Profit Lock',
            th: '<strong>ระบบป้องกันความเสี่ยง:</strong> ระบบป้องกัน 5 ชั้น ได้แก่ Daily Soft/Hard Circuit Breakers, News Event Blackout Shield และ Global Basket Profit Lock'
        },
        'idx.proj.gs.f5': {
            en: '<strong>Time-Series Walk-Forward Validation:</strong> Purged & embargoed validation across 8+ years (2018–2026) of gold (XAUUSD) data with 42+ engineered quantitative features',
            th: '<strong>Time-Series Walk-Forward Validation:</strong> ทดสอบแบบ Purged & Embargoed ย้อนหลังกว่า 8 ปี (2018–2026) บนข้อมูลทองคำ (XAUUSD) ด้วย 42+ features'
        },
        'idx.proj.gs.btn': {
            en: 'View AI Engine Details →',
            th: 'ดูรายละเอียดระบบ AI →'
        },

        // LINE Bot XAUUSD
        'idx.proj.lb.badge': { en: 'AI Signal Bot', th: 'บอทแจ้งเตือนสัญญาณ AI' },
        'idx.proj.lb.title': {
            en: 'LINE Bot XAUUSD Trading Signals',
            th: 'LINE Bot สัญญาณเทรด XAUUSD'
        },
        'idx.proj.lb.f1': {
            en: 'Trained ML Model for price prediction & regime detection of XAUUSD',
            th: 'โมเดล ML สำหรับทำนายราคาและจำแนกสภาวะตลาด XAUUSD'
        },
        'idx.proj.lb.f2': {
            en: 'Real-time Price Signal Detection and automated pattern analysis',
            th: 'ตรวจจับสัญญาณราคาแบบ Real-time และวิเคราะห์ Pattern อัตโนมัติ'
        },
        'idx.proj.lb.f3': {
            en: 'Gemini API for Prediction Reasoning, Explanations & Risk Assessment',
            th: 'ใช้ Gemini API สร้างเหตุผลประกอบการทำนายและประเมินความเสี่ยง'
        },
        'idx.proj.lb.f4': {
            en: 'Automated LINE Push Notifications with formatted charts & setups',
            th: 'แจ้งเตือนผ่าน LINE อัตโนมัติ พร้อมกราฟและ Setup ที่จัดรูปแบบแล้ว'
        },
        'idx.proj.lb.btn': {
            en: 'View Signal Bot Details →',
            th: 'ดูรายละเอียดบอทสัญญาณ →'
        },

        // Restaurant Group
        'idx.proj.rest.group': {
            en: 'Restaurant Ordering System',
            th: 'ระบบสั่งอาหารร้านอาหาร'
        },

        // Admin Dashboard
        'idx.proj.admin.badge': { en: 'Production Web App', th: 'Web App ใช้งานจริง' },
        'idx.proj.admin.title': {
            en: 'Restaurant Ordering System - Admin Dashboard',
            th: 'ระบบสั่งอาหาร - หน้าจัดการร้าน (Admin)'
        },
        'idx.proj.admin.f1': {
            en: 'Real-time Order Management - View and track all incoming orders',
            th: 'จัดการออเดอร์แบบ Real-time - ดูและติดตามออเดอร์ที่เข้ามาทั้งหมด'
        },
        'idx.proj.admin.f2': {
            en: 'Menu Management System - Create, update, and delete menu items',
            th: 'ระบบจัดการเมนู - เพิ่ม แก้ไข และลบรายการอาหาร'
        },
        'idx.proj.admin.f3': {
            en: 'Sales Analytics & Reports - Track daily/weekly sales and revenue',
            th: 'สถิติยอดขาย - ติดตามรายได้รายวัน/รายสัปดาห์'
        },
        'idx.proj.admin.f4': {
            en: 'Live Order Notifications - Push notifications to customers via LINE Bot',
            th: 'แจ้งเตือนออเดอร์สด - ส่ง Push แจ้งลูกค้าผ่าน LINE Bot'
        },
        'idx.proj.admin.f5': {
            en: 'Dashboard Analytics - Visual dashboard with order statistics',
            th: 'Dashboard สรุปภาพรวม - แสดงสถิติออเดอร์แบบกราฟิก'
        },
        'idx.proj.admin.f6': {
            en: 'Secure Authentication - Password-encrypted login system',
            th: 'ระบบล็อกอินปลอดภัย - เข้ารหัส Password'
        },
        'idx.proj.admin.btn': {
            en: 'View Full Ecosystem Details →',
            th: 'ดูรายละเอียดระบบทั้งหมด →'
        },

        // LINE Bot Restaurant
        'idx.proj.lbr.badge': { en: 'Production Chatbot', th: 'Chatbot ใช้งานจริง' },
        'idx.proj.lbr.title': {
            en: 'LINE Bot Restaurant Ordering',
            th: 'LINE Bot สั่งอาหารร้านอาหาร'
        },
        'idx.proj.lbr.f1': {
            en: 'LINE Messaging API Integration - Full webhook support',
            th: 'เชื่อมต่อ LINE Messaging API - รองรับ Webhook เต็มรูปแบบ'
        },
        'idx.proj.lbr.f2': {
            en: 'Order Processing via LINE Chat - Customers order through LINE',
            th: 'สั่งอาหารผ่านแชท LINE - ลูกค้าสั่งผ่าน LINE ได้เลย'
        },
        'idx.proj.lbr.f3': {
            en: 'Automated Order Confirmation - Instant order confirmation messages',
            th: 'ยืนยันออเดอร์อัตโนมัติ - ส่งข้อความยืนยันทันที'
        },
        'idx.proj.lbr.f4': {
            en: 'Database Synchronization - Orders saved to Supabase in real-time',
            th: 'ซิงค์ฐานข้อมูล - บันทึกออเดอร์ลง Supabase แบบ Real-time'
        },
        'idx.proj.lbr.f5': {
            en: 'Flex Message Support - Rich formatted message responses',
            th: 'รองรับ Flex Message - ข้อความตอบกลับสวยงาม'
        },
        'idx.proj.lbr.f6': {
            en: 'CORS Enabled - Multi-origin support for connected apps',
            th: 'เปิด CORS - รองรับเชื่อมต่อจากหลาย Origin'
        },
        'idx.proj.lbr.btn': {
            en: 'View Full Ecosystem Details →',
            th: 'ดูรายละเอียดระบบทั้งหมด →'
        },

        // Customer App
        'idx.proj.cust.badge': { en: 'Production Web App', th: 'Web App ใช้งานจริง' },
        'idx.proj.cust.title': {
            en: 'Customer App Restaurant Ordering',
            th: 'แอปสั่งอาหารฝั่งลูกค้า'
        },
        'idx.proj.cust.f1': {
            en: 'Menu Browsing & Selection - Browse restaurant menu with categories',
            th: 'เลือกดูเมนู - เรียกดูเมนูแยกตามหมวดหมู่'
        },
        'idx.proj.cust.f2': {
            en: 'Order Placement - Submit orders with customer details',
            th: 'ส่งออเดอร์ - ส่งคำสั่งซื้อพร้อมข้อมูลลูกค้า'
        },
        'idx.proj.cust.f3': {
            en: 'Shopping Cart Functionality - Add/remove items from cart',
            th: 'ระบบตะกร้า - เพิ่ม/ลบรายการในตะกร้าสินค้า'
        },
        'idx.proj.cust.f4': {
            en: 'Real-time Database Integration - Seamless data sync with Supabase',
            th: 'เชื่อมฐานข้อมูล Real-time - ซิงค์ข้อมูลกับ Supabase แบบไร้รอยต่อ'
        },
        'idx.proj.cust.f5': {
            en: 'Responsive Design - Mobile-friendly ordering interface',
            th: 'Responsive Design - หน้าจอสั่งอาหารใช้งานง่ายบนมือถือ'
        },
        'idx.proj.cust.btn': {
            en: 'View Full Ecosystem Details →',
            th: 'ดูรายละเอียดระบบทั้งหมด →'
        },

        // Mobile & ML Group
        'idx.proj.ml.group': {
            en: 'Mobile & Machine Learning Applications',
            th: 'แอปมือถือ & Machine Learning'
        },

        // Eat@Sci
        'idx.proj.eat.badge': { en: 'Mobile App', th: 'แอปมือถือ' },
        'idx.proj.eat.title': {
            en: 'Eat@Sci: Cafeteria Mobile Application',
            th: 'Eat@Sci: แอปสั่งอาหารโรงอาหารคณะวิทย์'
        },
        'idx.proj.eat.f1': {
            en: 'Auto Student Registration - Extracts student ID, year level, and faculty automatically from KMITL email',
            th: 'ลงทะเบียนอัตโนมัติ - ดึงรหัสนักศึกษา ชั้นปี และคณะจากอีเมล KMITL'
        },
        'idx.proj.eat.f2': {
            en: 'Real-time Order Management - Live order tracking with QR code verification system and payment slip uploads',
            th: 'จัดการออเดอร์ Real-time - ติดตามสถานะออเดอร์พร้อมระบบสแกน QR Code และอัปโหลดสลิปจ่ายเงิน'
        },
        'idx.proj.eat.f3': {
            en: 'Restaurant Dashboard - Menu management, order scheduling, and manual override capabilities with real-time updates',
            th: 'Dashboard ร้านค้า - จัดการเมนู จัดการออเดอร์ และปรับแก้ได้ด้วยมือ อัปเดต Real-time'
        },
        'idx.proj.eat.f4': {
            en: 'Secure Authentication & Privacy - Supabase auth with Row-Level Security (RLS) policies ensuring student data isolation and protection',
            th: 'ระบบยืนยันตัวตนปลอดภัย - ใช้ Supabase Auth ร่วมกับ Row-Level Security (RLS) แยกข้อมูลนักศึกษาแต่ละคนอย่างเข้มงวด'
        },
        'idx.proj.eat.btn': {
            en: 'View Mobile App Details →',
            th: 'ดูรายละเอียดแอปมือถือ →'
        },

        // Alzheimer
        'idx.proj.alz.badge': { en: 'Machine Learning', th: 'Machine Learning' },
        'idx.proj.alz.title': {
            en: "Alzheimer's Disease Prediction Platform",
            th: 'ระบบทำนายโรคอัลไซเมอร์'
        },
        'idx.proj.alz.f1': {
            en: "Trained Multi-Class Classification Model for early Alzheimer's disease stage prediction",
            th: 'โมเดล Multi-Class Classification สำหรับทำนายระยะเริ่มต้นของโรคอัลไซเมอร์'
        },
        'idx.proj.alz.f2': {
            en: 'Clinical Feature Importance & Data Analytics pipeline using patient cognitive indicators',
            th: 'วิเคราะห์ Feature Importance ทางคลินิกจากตัวชี้วัดด้านการรับรู้ของผู้ป่วย'
        },
        'idx.proj.alz.f3': {
            en: 'Interactive Web Application Interface for clinical risk assessment and metric visualization',
            th: 'หน้าเว็บแบบ Interactive สำหรับประเมินความเสี่ยงและแสดงผลตัวชี้วัดทางคลินิก'
        },
        'idx.proj.alz.f4': {
            en: 'Data Preprocessing & Validation pipeline engineered for high medical classification accuracy',
            th: 'Pipeline เตรียมข้อมูลและทดสอบโมเดลที่ออกแบบเพื่อความแม่นยำสูงในงานจำแนกทางการแพทย์'
        },
        'idx.proj.alz.btn': {
            en: 'View ML Platform Details →',
            th: 'ดูรายละเอียดระบบ ML →'
        },

        // Key Features (shared)
        'shared.features': { en: 'Key Features:', th: 'จุดเด่น:' },

        // KNARES features (on index)
        'idx.proj.kn.f1': {
            en: '<strong>12-State Market Regime Classifier:</strong> Real-time market regime identification (Trend Up/Down, Range/Choppy, Volatility Shock, Breakout Squeeze)',
            th: '<strong>ตัวจำแนกสภาวะตลาด 12 สถานะ:</strong> ระบุสภาวะตลาดแบบ Real-time (Trend Up/Down, Range/Choppy, Volatility Shock, Breakout Squeeze)'
        },
        'idx.proj.kn.f2': {
            en: '<strong>Institutional SMC Context Engine:</strong> Algorithmic market structure detection (BOS, CHoCH, Liquidity Sweeps, and Fibonacci Premium/Discount Zones)',
            th: '<strong>SMC Context Engine:</strong> ตรวจจับโครงสร้างตลาดแบบอัลกอริทึม (BOS, CHoCH, Liquidity Sweeps และ Fibonacci Premium/Discount Zones)'
        },
        'idx.proj.kn.f3': {
            en: '<strong>Centralized Pipeline Controller:</strong> Multi-strategy arbitration (Trend, Breakout, Mean Reversion) with dynamic scoring and Signal Rescue logic',
            th: '<strong>Pipeline Controller แบบรวมศูนย์:</strong> ตัดสินใจจากหลายกลยุทธ์ (Trend, Breakout, Mean Reversion) ด้วยระบบให้คะแนนแบบ Dynamic และ Signal Rescue'
        },
        'idx.proj.kn.f4': {
            en: '<strong>5-Layer Safety Limit Gate:</strong> Comprehensive capital protection (Portfolio Drawdown limits, Exposure/Heat Caps, Price Clustering blocks, Single-Instance Guard)',
            th: '<strong>ระบบป้องกัน 5 ชั้น:</strong> ปกป้องเงินทุนรอบด้าน (จำกัด Portfolio Drawdown, Exposure/Heat Cap, กัน Price Clustering, Single-Instance Guard)'
        },
        'idx.proj.kn.f5': {
            en: '<strong>Priority-Based Exit Arbitration:</strong> 6-tier execution management with 1R Partial Close + Breakeven, Volatility Shock emergency exit, and dynamic ATR Trailing Stops',
            th: '<strong>ระบบปิดออเดอร์ตามลำดับความสำคัญ:</strong> จัดการ 6 ระดับ ทั้ง 1R Partial Close + Breakeven, Volatility Shock emergency exit และ ATR Trailing Stops แบบ Dynamic'
        },

        // Languages Section
        'idx.lang.title': { en: 'Languages', th: 'ภาษา' },
        'idx.lang.thai': { en: 'Thai', th: 'ไทย' },
        'idx.lang.english': { en: 'English', th: 'อังกฤษ' },

        // Footer
        'idx.footer': {
            en: '&copy; 2026 .Phumrapee Kaewmane.All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== KNARES DETAIL =====================
        'kn.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'kn.hero.badge1': { en: 'Senior Capstone / ปัญหาพิเศษ', th: 'ปัญหาพิเศษ' },
        'kn.hero.badge2': { en: 'Institutional Algorithmic Trading', th: 'ระบบเทรดอัตโนมัติระดับสถาบัน' },
        'kn.hero.title': {
            en: 'KNARES MT5: Knowledge-Navigator Expert Advisor',
            th: 'KNARES MT5: Knowledge-Navigator Expert Advisor'
        },
        'kn.hero.subtitle': {
            en: 'Institutional-Grade Multi-Strategy Algorithmic Trading Framework & Smart Money Concepts (SMC) Architecture built for MetaTrader 5.',
            th: 'Framework สำหรับเทรดอัตโนมัติแบบหลายกลยุทธ์ ออกแบบตามแนวคิด Smart Money Concepts (SMC) สำหรับ MetaTrader 5'
        },
        'kn.meta.l1': { en: 'Project Type', th: 'ประเภทโปรเจกต์' },
        'kn.meta.v1': { en: 'Senior Capstone (ปัญหาพิเศษ)', th: 'ปัญหาพิเศษ (Senior Capstone)' },
        'kn.meta.l2': { en: 'Institution', th: 'สถาบัน' },
        'kn.meta.v2': { en: 'KMITL - Computer Science', th: 'สจล. - วิทยาการคอมพิวเตอร์' },
        'kn.meta.l3': { en: 'Primary Languages', th: 'ภาษาหลัก' },
        'kn.meta.l4': { en: 'Core Philosophy', th: 'แนวคิดหลัก' },
        'kn.meta.v4': { en: 'Context-First & Risk Defense', th: 'Context-First & ป้องกันความเสี่ยง' },
        'kn.btn.github': { en: 'View on GitHub', th: 'ดูโค้ดบน GitHub' },
        'kn.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },

        'kn.s1.title': { en: 'Executive Overview & Philosophy', th: 'ภาพรวมและปรัชญาการออกแบบ' },
        'kn.s1.lead': {
            en: '<strong>KNARES MT5</strong> is an institutional-grade automated trading framework built on a modular, event-driven pipeline architecture. Unlike conventional Expert Advisors that rely on static indicator crossovers, KNARES emulates the decision-making hierarchy of quantitative hedge funds. It operates on four uncompromised core pillars:',
            th: '<strong>KNARES MT5</strong> เป็น Framework สำหรับเทรดอัตโนมัติที่สร้างบนสถาปัตยกรรมแบบ Modular Event-Driven Pipeline ไม่เหมือน EA ทั่วไปที่พึ่ง Indicator Crossover อย่างเดียว KNARES จำลองลำดับการตัดสินใจแบบ Quantitative Hedge Fund โดยยึด 4 หลักการหลัก:'
        },
        'kn.s1.f1.title': { en: '1. Context First', th: '1. Context ต้องมาก่อน' },
        'kn.s1.f1.desc': {
            en: 'Signals are meaningless without market context. No trading sub-engine is allowed to execute unless market regime and price structure align with high statistical confidence.',
            th: 'สัญญาณเทรดไม่มีความหมายถ้าไม่มี Context ของตลาด ไม่มี Sub-Engine ไหนจะเทรดได้เลยถ้า Market Regime และ Price Structure ยังไม่ตรงกัน'
        },
        'kn.s1.f2.title': { en: '2. Defense Wins Championships', th: '2. ป้องกันดีย่อมชนะ' },
        'kn.s1.f2.desc': {
            en: 'Multi-layered risk defense covering order-level stops, cluster blocking, currency exposure caps, portfolio heat limits, and a system-wide emergency kill switch.',
            th: 'ระบบป้องกันหลายชั้น ครอบคลุมตั้งแต่ Stop Loss ระดับออเดอร์, ป้องกัน Cluster, จำกัด Exposure, ควบคุม Portfolio Heat ไปจนถึง Emergency Kill Switch'
        },
        'kn.s1.f3.title': { en: '3. Dynamic Adaptation', th: '3. ปรับตัวแบบ Dynamic' },
        'kn.s1.f3.desc': {
            en: 'Real-time volatility adaptation that scales position sizing, adjusts take-profit R-multiples, and pauses execution during broker rejection spikes or volatility shocks.',
            th: 'ปรับขนาดออเดอร์ตาม Volatility แบบ Real-time ปรับ Take-Profit ตาม R-Multiple และหยุดเทรดเมื่อโบรกเกอร์ Reject มากหรือ Volatility พุ่ง'
        },
        'kn.s1.f4.title': { en: '4. Full Traceability', th: '4. ตรวจสอบได้ทุกจุด' },
        'kn.s1.f4.desc': {
            en: 'Granular reason logging records every single entry, veto, rejection, and early exit event into structured logs for post-trade quantitative review.',
            th: 'บันทึกเหตุผลทุก Entry, Veto, Rejection และ Early Exit ลง Log แบบละเอียด เอาไว้ Review หลังเทรดเชิงปริมาณ'
        },

        'kn.s2.title': { en: 'System Architecture & Pipeline Orchestration', th: 'สถาปัตยกรรมระบบและ Pipeline' },
        'kn.s2.lead': {
            en: 'Every market tick passes through an orchestrated pipeline divided into discrete, decoupled layers:',
            th: 'ทุก Tick ของตลาดจะผ่าน Pipeline ที่แบ่งเป็นชั้นๆ แยกออกจากกัน:'
        },
        'kn.s2.flow.badge': { en: 'Event-Driven Architecture', th: 'สถาปัตยกรรม Event-Driven' },
        'kn.s2.flow.title': { en: 'Execution Pipeline Flow', th: 'Pipeline การทำงาน' },
        'kn.s2.step1.title': { en: 'Market Data Snapshot & Feature Engineering', th: 'ดึงข้อมูลตลาดและสร้าง Feature' },
        'kn.s2.step1.desc': {
            en: 'Captures live bid/ask/spread, calculates higher-timeframe metrics, ADX momentum, ATR volatility percentiles, EMA slopes, and DOM (Depth of Market) order book imbalances.',
            th: 'ดึงราคา Bid/Ask/Spread แบบ Live คำนวณ Metric ของ Timeframe ที่สูงกว่า, ADX Momentum, ATR Volatility Percentile, EMA Slope และ Depth of Market (DOM)'
        },
        'kn.s2.step2.title': { en: 'SMC Context & Price Structure Layer', th: 'SMC Context และ Price Structure' },
        'kn.s2.step2.desc': {
            en: 'Analyzes swing highs/lows, detects Break of Structure (BOS) & Change of Character (CHoCH), maps Fibonacci Premium/Discount zones, and quantifies Liquidity Sweep quality.',
            th: 'วิเคราะห์ Swing High/Low, ตรวจจับ BOS & CHoCH, Mapping โซน Fibonacci Premium/Discount และให้คะแนน Liquidity Sweep'
        },
        'kn.s2.step3.title': { en: '12-State Market Regime Classifier', th: 'ตัวจำแนกสภาวะตลาด 12 สถานะ' },
        'kn.s2.step3.desc': {
            en: 'Classifies current market behavior into 12 distinct states (Trend Up/Down, Range, Choppy, Squeeze Ready, Volatility Shock, Transition, Risk-Off) to determine active trading rules.',
            th: 'จำแนกพฤติกรรมตลาดเป็น 12 สถานะ (Trend Up/Down, Range, Choppy, Squeeze Ready, Volatility Shock, Transition, Risk-Off) เพื่อเลือกกฎการเทรดที่เหมาะสม'
        },
        'kn.s2.step4.title': { en: 'Pipeline Controller & Signal Arbitration', th: 'Pipeline Controller และการตัดสินสัญญาณ' },
        'kn.s2.step4.desc': {
            en: 'Gathers raw signals from sub-engines (Trend, Breakout, Mean Reversion), applies regime multipliers, penalizes timeframe divergence, and executes Rescue Logic for near-threshold high-quality setups.',
            th: 'รวบรวมสัญญาณจาก Sub-Engine (Trend, Breakout, Mean Reversion) คูณน้ำหนักตาม Regime หักคะแนน Timeframe ที่ขัดกัน และ Rescue สัญญาณคุณภาพดีที่คะแนนเกือบผ่าน'
        },
        'kn.s2.step5.title': { en: '5-Layer Safety Limit Gate & Execution', th: 'ระบบป้องกัน 5 ชั้น & ส่งคำสั่งเทรด' },
        'kn.s2.step5.desc': {
            en: 'Validates portfolio drawdown, exposure caps, price clustering, and single-instance locks before dispatching algorithmic market orders with sub-millisecond execution.',
            th: 'ตรวจสอบ Portfolio Drawdown, Exposure Cap, Price Clustering และ Single-Instance Lock ก่อนส่งคำสั่งเข้าตลาดด้วยความเร็วต่ำกว่า Millisecond'
        },

        'kn.s3.title': { en: 'Core Modules & Mathematical Capabilities', th: 'โมดูลหลักและความสามารถเชิงคณิตศาสตร์' },
        'kn.s4.title': { en: 'Technologies & Quantitative Tools', th: 'เทคโนโลยีและเครื่องมือ Quantitative' },
        'kn.footer': {
            en: '&copy; 2026 Phumrapee Kaewmanee. KNARES MT5 Framework. All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี KNARES MT5 Framework สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== GOLDSNIPER DETAIL =====================
        'gs.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'gs.hero.badge1': { en: 'Machine Learning / Edge AI', th: 'Machine Learning / Edge AI' },
        'gs.hero.badge2': { en: '0ms In-Memory ONNX Inference', th: '0ms In-Memory ONNX Inference' },
        'gs.hero.title': {
            en: 'GoldSniper AI: Multi-Scale Machine Learning Trading Engine',
            th: 'GoldSniper AI: ระบบเทรดอัจฉริยะ Multi-Scale Machine Learning'
        },
        'gs.hero.subtitle': {
            en: 'High-frequency quantitative regime classifier & dual execution engine engineered for Spot Gold (XAUUSD) precision trading with embedded ONNX runtime.',
            th: 'ระบบจำแนก Regime เชิงปริมาณ และ Dual Execution Engine สำหรับเทรดทองคำ (XAUUSD) ที่ฝัง ONNX Runtime ไว้ภายในตัว'
        },
        'gs.meta.l1': { en: 'Target Asset', th: 'สินทรัพย์เป้าหมาย' },
        'gs.meta.l2': { en: 'ML Core', th: 'แกนหลัก ML' },
        'gs.meta.l3': { en: 'Execution Latency', th: 'ความเร็วประมวลผล' },
        'gs.meta.v3': { en: '0ms (Native C++/MQL5)', th: '0ms (Native C++/MQL5)' },
        'gs.meta.l4': { en: 'Validation Data', th: 'ข้อมูลทดสอบ' },
        'gs.meta.v4': { en: '8+ Years Walk-Forward CV', th: '8+ ปี Walk-Forward CV' },
        'gs.btn.github': { en: 'View Code', th: 'ดูโค้ด' },
        'gs.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },

        'gs.s1.title': { en: 'End-to-End Deep Quantitative Architecture', th: 'สถาปัตยกรรมเชิงปริมาณแบบครบวงจร' },
        'gs.s1.lead': {
            en: 'The <strong>GoldSniper AI</strong> trading system solves the core vulnerability of single-timeframe trading bots by deploying a <strong>Hierarchical Multi-Scale Regime Classification Architecture</strong>. It trains three specialized machine learning models running concurrently to classify gold market dynamics into three discrete states:',
            th: '<strong>GoldSniper AI</strong> แก้จุดอ่อนของบอทที่พึ่ง Timeframe เดียว ด้วยการใช้ <strong>Hierarchical Multi-Scale Regime Classification</strong> ที่รันโมเดล ML 3 ตัวพร้อมกันเพื่อจำแนกสภาวะตลาดทองคำเป็น 3 สถานะ:'
        },
        'gs.s1.imgcap': {
            en: 'Figure 1: End-to-End Quantitative Pipeline — Data Ingestion, Feature Engineering, Walk-Forward CV, LightGBM Model Training, and ONNX Native Deployment.',
            th: 'ภาพที่ 1: Quantitative Pipeline แบบครบวงจร — การดึงข้อมูล, สร้าง Feature, Walk-Forward CV, เทรนโมเดล LightGBM และ Deploy ONNX'
        },
        'gs.s2.title': { en: 'Multi-Scale Model Hierarchy', th: 'ลำดับชั้นโมเดลหลายระดับ' },
        'gs.s2.lead': {
            en: 'To eliminate single-timeframe noise and prevent lookahead bias (data leakage), higher timeframe bars are calculated strictly on completed historical candles:',
            th: 'เพื่อกำจัด Noise จาก Timeframe เดียวและป้องกัน Lookahead Bias (Data Leakage) แท่งเทียน Timeframe ที่สูงกว่าจะคำนวณจากแท่งที่ปิดแล้วเท่านั้น:'
        },
        'gs.s2.f1.title': { en: 'Model 1: Micro Engine (Intraday)', th: 'โมเดล 1: Micro Engine (Intraday)' },
        'gs.s2.f1.desc': {
            en: 'Syncs <strong>H1</strong> (Macro Trend) + <strong>M15</strong> (Session Momentum) + <strong>M5</strong> (Execution Trigger) for high-frequency scalping and precision trend continuation.',
            th: 'ซิงค์ <strong>H1</strong> (Macro Trend) + <strong>M15</strong> (Session Momentum) + <strong>M5</strong> (Execution Trigger) สำหรับ Scalping และต่อเทรนด์แบบแม่นยำ'
        },
        'gs.s2.f2.title': { en: 'Model 2: Swing Engine (Session Flow)', th: 'โมเดล 2: Swing Engine (Session Flow)' },
        'gs.s2.f2.desc': {
            en: 'Syncs <strong>H4</strong> (Structural Swing) + <strong>M30</strong> (Cycle Flow) + <strong>M15</strong> (Momentum Filter) for medium-term intraday swing entries.',
            th: 'ซิงค์ <strong>H4</strong> (Structural Swing) + <strong>M30</strong> (Cycle Flow) + <strong>M15</strong> (Momentum Filter) สำหรับเข้า Swing ระหว่างวัน'
        },
        'gs.s2.f3.title': { en: 'Model 3: Macro Directional Bias', th: 'โมเดล 3: Macro Directional Bias' },
        'gs.s2.f3.desc': {
            en: 'Syncs <strong>D1</strong> (Institutional Bias) + <strong>H4</strong> (Trend Anchor) + <strong>H1</strong> (Trigger) to anchor and govern the safety of sideway recovery baskets.',
            th: 'ซิงค์ <strong>D1</strong> (Institutional Bias) + <strong>H4</strong> (Trend Anchor) + <strong>H1</strong> (Trigger) เพื่อกำกับทิศทางและความปลอดภัยของ Sideway Recovery Baskets'
        },

        'gs.s3.title': { en: 'Feature Engineering & Walk-Forward Validation', th: 'การสร้าง Feature และ Walk-Forward Validation' },
        'gs.s3.lead': {
            en: 'Over <strong>42 mathematical and statistical features</strong> are engineered across momentum, volatility, trend strength, and candle microstructure:',
            th: 'สร้าง <strong>Feature ทางคณิตศาสตร์และสถิติกว่า 42 ตัว</strong> ครอบคลุม Momentum, Volatility, Trend Strength และ Candle Microstructure:'
        },
        'gs.s3.cv.title': { en: 'Purged & Embargoed Time-Series Cross-Validation', th: 'Purged & Embargoed Time-Series Cross-Validation' },
        'gs.s3.cv.badge': { en: 'Zero Data Leakage', th: 'ไม่มี Data Leakage' },
        'gs.s3.cv.desc': {
            en: 'Standard K-Fold cross-validation causes severe overfitting on financial time-series due to serial autocorrelation. We implement <strong>Purged Group Time-Series Split</strong> with embargo periods across 8+ years (2018–2026) of tick and M5 historical gold data.',
            th: 'K-Fold CV แบบปกติทำให้ Overfit รุนแรงบนข้อมูลการเงินเพราะ Serial Autocorrelation เราจึงใช้ <strong>Purged Group Time-Series Split</strong> พร้อม Embargo Period บนข้อมูลทองคำย้อนหลังกว่า 8 ปี (2018–2026)'
        },

        'gs.s4.title': { en: 'Zero-Latency ONNX Native C++/MQL5 Runtime', th: 'ONNX Runtime แบบ Zero-Latency บน C++/MQL5' },
        'gs.s4.lead': {
            en: 'Unlike traditional Python trading setups that incur 50–200ms network latency through WebSockets or REST APIs, the trained LightGBM models are exported to <strong>ONNX (Open Neural Network Exchange)</strong> format and executed <strong>in-memory directly inside the MetaTrader 5 runtime</strong>:',
            th: 'ต่างจากระบบเทรดที่ใช้ Python ซึ่งมี Latency 50–200ms ผ่าน WebSocket/REST API โมเดล LightGBM ที่เทรนเสร็จแล้วจะถูก Export เป็น <strong>ONNX</strong> และรัน <strong>ในหน่วยความจำตรงภายใน MetaTrader 5</strong>:'
        },
        'gs.s4.f1.title': { en: 'Sub-Millisecond Inference', th: 'ประมวลผลต่ำกว่า Millisecond' },
        'gs.s4.f1.desc': {
            en: 'Zero inter-process communication overhead. Inference executes in under 0.5ms per tick inside the MQL5 engine.',
            th: 'ไม่มี Overhead จากการสื่อสารระหว่าง Process ประมวลผลต่ำกว่า 0.5ms ต่อ Tick ภายใน MQL5 Engine'
        },
        'gs.s4.f2.title': { en: 'Dual Execution Engine', th: 'Dual Execution Engine' },
        'gs.s4.f2.desc': {
            en: 'Trend HFT Scalper with dynamic ATR TP/SL alongside a Prior-Trend Sideway Martingale Grid equipped with AI Reversal Killer.',
            th: 'Trend HFT Scalper พร้อม ATR TP/SL แบบ Dynamic ควบคู่กับ Sideway Martingale Grid ที่มี AI Reversal Killer'
        },
        'gs.s4.f3.title': { en: '5-Pillar Defense Framework', th: 'ระบบป้องกัน 5 เสาหลัก' },
        'gs.s4.f3.desc': {
            en: 'Daily Circuit Breakers (Soft & Hard locks), High-Impact News Event Blackout Shield, and Global Basket Profit Locks.',
            th: 'Daily Circuit Breakers (Soft & Hard), News Event Blackout Shield และ Global Basket Profit Lock'
        },

        'gs.s5.title': { en: 'Technologies & Stack', th: 'เทคโนโลยีที่ใช้' },
        'gs.footer': {
            en: '&copy; 2026 Phumrapee Kaewmanee. GoldSniper AI Project. All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี GoldSniper AI Project สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== RESTAURANT SYSTEM DETAIL =====================
        'rs.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'rs.hero.badge1': { en: 'Production Ecosystem', th: 'ระบบใช้งานจริง' },
        'rs.hero.badge2': { en: 'Full-Stack LINE Integration', th: 'Full-Stack เชื่อมต่อ LINE' },
        'rs.hero.title': {
            en: 'Restaurant Ordering & Kitchen Management Ecosystem',
            th: 'ระบบสั่งอาหารและจัดการครัวแบบครบวงจร'
        },
        'rs.hero.subtitle': {
            en: 'An end-to-end multi-service food ordering solution comprising a Customer LINE LIFF Web App, an automated LINE Messaging Bot, and a Real-time Admin & Kitchen Dashboard.',
            th: 'ระบบสั่งอาหารครบวงจร ประกอบด้วย Customer LIFF Web App, LINE Bot แจ้งเตือนอัตโนมัติ และ Dashboard สำหรับจัดการร้านและครัวแบบ Real-time'
        },
        'rs.meta.l1': { en: 'Project Scope', th: 'ขอบเขตโปรเจกต์' },
        'rs.meta.v1': { en: '3 Connected Subsystems', th: '3 ระบบย่อยเชื่อมต่อกัน' },
        'rs.meta.l2': { en: 'Frontend Stack', th: 'Frontend Stack' },
        'rs.meta.l3': { en: 'Backend & Database', th: 'Backend & Database' },
        'rs.meta.l4': { en: 'Integrations', th: 'การเชื่อมต่อ' },
        'rs.btn.github': { en: 'GitHub Repositories', th: 'GitHub Repositories' },
        'rs.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },

        'rs.s1.title': { en: 'End-to-End System Architecture', th: 'สถาปัตยกรรมระบบแบบครบวงจร' },
        'rs.s1.lead': {
            en: 'This restaurant ordering ecosystem replaces traditional paper menus and fragmented order taking with an automated, synchronized real-time workflow across three micro-services:',
            th: 'ระบบนี้แทนที่เมนูกระดาษและการจดออเดอร์แบบกระจัดกระจาย ด้วย Workflow อัตโนมัติที่ซิงค์กันแบบ Real-time ผ่าน 3 Micro-Service:'
        },
        'rs.s2.title': { en: 'Detailed Subsystems & Components', th: 'รายละเอียดระบบย่อยแต่ละตัว' },
        'rs.sub1.label': { en: 'Subsystem 1', th: 'ระบบย่อยที่ 1' },
        'rs.sub1.title': { en: '1. Restaurant Admin & Kitchen Dashboard', th: '1. Dashboard จัดการร้านและครัว' },
        'rs.sub2.label': { en: 'Subsystem 2', th: 'ระบบย่อยที่ 2' },
        'rs.sub2.title': { en: '2. Automated LINE Bot Ordering Engine', th: '2. ระบบ LINE Bot สั่งอาหารอัตโนมัติ' },
        'rs.sub3.label': { en: 'Subsystem 3', th: 'ระบบย่อยที่ 3' },
        'rs.sub3.title': { en: '3. Customer Ordering Web App (LINE LIFF)', th: '3. Web App สั่งอาหารฝั่งลูกค้า (LINE LIFF)' },
        'rs.s3.title': { en: 'Technologies & Architecture Stack', th: 'เทคโนโลยีที่ใช้' },
        'rs.footer': {
            en: '&copy; 2026 Phumrapee Kaewmanee. Restaurant Ordering System. All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี ระบบสั่งอาหาร สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== LINE BOT XAUUSD DETAIL =====================
        'lb.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'lb.hero.badge1': { en: 'AI Trading Assistant', th: 'ผู้ช่วยเทรด AI' },
        'lb.hero.badge2': { en: 'LLM Reasoning Engine', th: 'LLM Reasoning Engine' },
        'lb.hero.title': {
            en: 'LINE Bot XAUUSD Trading Signals & AI Reasoning',
            th: 'LINE Bot สัญญาณเทรด XAUUSD พร้อมเหตุผล AI'
        },
        'lb.hero.subtitle': {
            en: 'An automated financial intelligence bot combining machine learning price signal detection with Google Gemini AI for contextual trade reasoning and instant LINE broadcast alerts.',
            th: 'บอทอัจฉริยะด้านการเงิน ที่รวม ML ตรวจจับสัญญาณราคา กับ Google Gemini AI สำหรับสร้างเหตุผลประกอบการเทรดและแจ้งเตือนผ่าน LINE อัตโนมัติ'
        },
        'lb.meta.l1': { en: 'Primary Asset', th: 'สินทรัพย์หลัก' },
        'lb.meta.l2': { en: 'AI Engine', th: 'AI Engine' },
        'lb.meta.l3': { en: 'Core Language', th: 'ภาษาหลัก' },
        'lb.meta.v3': { en: 'Python (Async Webhooks)', th: 'Python (Async Webhooks)' },
        'lb.meta.l4': { en: 'Broadcast Channel', th: 'ช่องทางแจ้งเตือน' },
        'lb.btn.github': { en: 'View Code on GitHub', th: 'ดูโค้ดบน GitHub' },
        'lb.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },
        'lb.s1.title': { en: 'Project Overview & Motivation', th: 'ภาพรวมและแรงบันดาลใจ' },
        'lb.s1.lead': {
            en: 'Retail traders frequently suffer from "black box" signals where automated bots provide buy/sell directions without transparent reasoning or risk context. The <strong>LINE Bot XAUUSD</strong> system solves this problem by pairing a machine learning price action classifier with **Google Gemini LLM** to produce human-interpretable technical explanations, risk metrics, and key price levels for every alert.',
            th: 'เทรดเดอร์รายย่อยมักเจอปัญหา "Black Box" ที่บอทให้แค่สัญญาณ Buy/Sell โดยไม่บอกเหตุผล <strong>LINE Bot XAUUSD</strong> แก้ปัญหานี้ด้วยการจับคู่ ML Price Action Classifier กับ Google Gemini เพื่อสร้างคำอธิบายเชิงเทคนิค ตัวชี้วัดความเสี่ยง และราคาสำคัญในทุกสัญญาณ'
        },
        'lb.s2.title': { en: 'Signal Processing Pipeline', th: 'Pipeline ประมวลผลสัญญาณ' },
        'lb.s3.title': { en: 'Technologies & Tools', th: 'เทคโนโลยีและเครื่องมือ' },
        'lb.footer': {
            en: '&copy; 2026 Phumrapee Kaewmanee. LINE Bot XAUUSD Project. All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี LINE Bot XAUUSD สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== EAT@SCI DETAIL =====================
        'eat.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'eat.hero.badge1': { en: 'Mobile Application', th: 'แอปมือถือ' },
        'eat.hero.badge2': { en: 'Campus Cafeteria Solution', th: 'ระบบโรงอาหารในมหาวิทยาลัย' },
        'eat.hero.title': {
            en: 'Eat@Sci: Cafeteria Mobile Application',
            th: 'Eat@Sci: แอปสั่งอาหารโรงอาหารคณะวิทย์'
        },
        'eat.hero.subtitle': {
            en: 'A cross-platform mobile solution developed for the Faculty of Science cafeteria at KMITL, featuring automated institutional student verification, live QR order tracking, and vendor dashboard management.',
            th: 'แอปมือถือ Cross-Platform สำหรับโรงอาหารคณะวิทยาศาสตร์ สจล. มีระบบตรวจสอบนักศึกษาอัตโนมัติ, ติดตามออเดอร์ด้วย QR Code และ Dashboard สำหรับร้านค้า'
        },
        'eat.meta.l1': { en: 'Client / Target', th: 'กลุ่มเป้าหมาย' },
        'eat.meta.v1': { en: 'Faculty of Science, KMITL', th: 'คณะวิทยาศาสตร์ สจล.' },
        'eat.meta.l2': { en: 'Framework', th: 'Framework' },
        'eat.meta.l3': { en: 'Database & Auth', th: 'Database & Auth' },
        'eat.meta.l4': { en: 'Platforms', th: 'แพลตฟอร์ม' },
        'eat.btn.github': { en: 'View Code on GitHub', th: 'ดูโค้ดบน GitHub' },
        'eat.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },
        'eat.s1.title': { en: 'Project Overview & Problem Solved', th: 'ภาพรวมและปัญหาที่แก้ไข' },
        'eat.s1.lead': {
            en: 'During peak lunchtime hours at the Faculty of Science cafeteria, overcrowding and long queue times frequently caused student schedule delays. **Eat@Sci** modernizes the dining experience by allowing students to pre-order food, upload payment slips, and pick up meals seamlessly using unique QR code verification.',
            th: 'ช่วงพักกลางวันที่โรงอาหารคณะวิทย์ มักมีคนแน่นและต้องต่อคิวนานจนเสียเวลาเรียน **Eat@Sci** แก้ปัญหานี้ด้วยการให้นักศึกษาสั่งอาหารล่วงหน้า อัปโหลดสลิป และรับอาหารง่ายๆ ด้วย QR Code'
        },
        'eat.s2.title': { en: 'Technical Architecture & Stack', th: 'สถาปัตยกรรมและเทคโนโลยี' },
        'eat.s3.title': { en: 'Technologies Used', th: 'เทคโนโลยีที่ใช้' },
        'eat.footer': {
            en: '&copy; 2026 Phumrapee Kaewmanee. Eat@Sci Cafeteria Mobile Application. All rights reserved.',
            th: '&copy; 2026 ภูมิรพี แก้วมณี Eat@Sci สงวนลิขสิทธิ์ทุกประการ'
        },

        // ===================== ALZHEIMER DETAIL =====================
        'alz.back': { en: 'Back to Resume', th: 'กลับหน้าหลัก' },
        'alz.hero.badge1': { en: 'Machine Learning / Healthcare AI', th: 'Machine Learning / Healthcare AI' },
        'alz.hero.badge2': { en: 'Multi-Class Classification', th: 'Multi-Class Classification' },
        'alz.hero.title': {
            en: "Alzheimer's Disease Stage Prediction Platform",
            th: 'ระบบทำนายระยะโรคอัลไซเมอร์'
        },
        'alz.hero.subtitle': {
            en: "An end-to-end clinical machine learning platform analyzing patient cognitive scores, demographic markers, and neurological indicators to predict early Alzheimer's disease onset.",
            th: 'ระบบ Machine Learning ทางคลินิกที่วิเคราะห์คะแนนด้านการรับรู้ ข้อมูลประชากร และตัวชี้วัดทางประสาทวิทยา เพื่อทำนายการเกิดโรคอัลไซเมอร์ระยะเริ่มต้น'
        },
        'alz.meta.l1': { en: 'Domain', th: 'สาขา' },
        'alz.meta.v1': { en: 'Healthcare & Medical AI', th: 'AI ด้านสุขภาพและการแพทย์' },
        'alz.meta.l2': { en: 'Core Models', th: 'โมเดลหลัก' },
        'alz.meta.l3': { en: 'Web Deployment', th: 'Deploy บน' },
        'alz.meta.l4': { en: 'Key Metrics', th: 'ตัวชี้วัดสำคัญ' },
        'alz.meta.v4': { en: 'High Sensitivity & F1-Score', th: 'Sensitivity และ F1-Score สูง' },
        'alz.btn.demo': { en: 'View Live Web Demo', th: 'ดู Demo ออนไลน์' },
        'alz.btn.portfolio': { en: 'Back to Portfolio', th: 'กลับหน้าผลงาน' },
        'alz.s1.title': { en: 'Clinical Background & Objective', th: 'ที่มาทางคลินิกและวัตถุประสงค์' },
        'alz.s1.lead': {
            en: 'Early detection of Alzheimer\'s Disease and Mild Cognitive Impairment (MCI) is critical for administering preventative care and cognitive therapy. This project builds a clinical decision support system utilizing supervised machine learning to classify patients into diagnostic stages based on standardized neuro-psychological assessments and medical metrics.',
            th: 'การตรวจพบโรคอัลไซเมอร์และภาวะบกพร่องทางการรับรู้ (MCI) ตั้งแต่เนิ่นๆ สำคัญมากต่อการดูแลป้องกันและบำบัดทางการรับรู้ โปรเจกต์นี้สร้างระบบช่วยตัดสินใจทางคลินิกด้วย Supervised ML เพื่อจำแนกผู้ป่วยเข้าระยะวินิจฉัยตามแบบทดสอบทางประสาทจิตวิทยามาตรฐาน'
        },
        'alz.s2.title': { en: 'Machine Learning Pipeline', th: 'Machine Learning Pipeline' },
        'alz.s3.title': { en: 'Technologies & Stack', th: 'เทคโนโลยีที่ใช้' },
        'alz.footer': {
            en: "&copy; 2026 Phumrapee Kaewmanee. Alzheimer's Disease Prediction Platform. All rights reserved.",
            th: '&copy; 2026 ภูมิรพี แก้วมณี ระบบทำนายโรคอัลไซเมอร์ สงวนลิขสิทธิ์ทุกประการ'
        },
    };

    // --- Core Language Engine ---
    let currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (T[key] && T[key][lang]) {
                el.innerHTML = T[key][lang];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'th' ? 'th' : 'en';

        // Update all lang toggle buttons on the page
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            btn.textContent = lang === 'th' ? 'TH' : 'EN';
        });
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'en' ? 'th' : 'en');
    }

    // --- Initialize ---
    document.addEventListener('DOMContentLoaded', () => {
        // Bind all lang toggle buttons
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            btn.addEventListener('click', toggleLanguage);
        });

        // Apply saved language
        applyLanguage(currentLang);
    });

    // Expose for external use
    window.LangEngine = { applyLanguage, toggleLanguage, T };
})();
