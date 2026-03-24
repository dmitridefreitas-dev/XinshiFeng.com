export const experiences = [
  // ── Research ──────────────────────────────────────────────────────────────
  {
    id: 'deRham',
    title: { en: 'de Rham Cohomology in Manifold Theory', zh: '流形理论中的 de Rham 上同调' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Graduate-supervised Research', zh: '研究生指导研究' },
    date: { en: 'June 2025 – Present', zh: '2025 年 6 月 – 至今' },
    type: 'research',
    shortDescription: {
      en: 'Studying smooth manifolds and de Rham cohomology under Prof. Yanli Song, computing classical examples via Mayer–Vietoris sequences.',
      zh: '在宋雁离教授指导下研究光滑流形和 de Rham 上同调，通过 Mayer–Vietoris 序列计算经典例子。',
    },
    description: [
      { en: 'Studying smooth manifolds and de Rham cohomology under the supervision of Professor Yanli Song.', zh: '在宋雁离教授的指导下研究光滑流形和 de Rham 上同调。' },
      { en: 'Engaging in weekly discussions to present insights and deepen understanding of core concepts.', zh: '每周参与讨论，展示见解并加深对核心概念的理解。' },
      { en: 'Computing classical examples of de Rham cohomology using techniques such as Mayer–Vietoris sequences.', zh: '使用 Mayer–Vietoris 序列等技术计算 de Rham 上同调的经典例子。' },
    ],
  },
  {
    id: 'cooperation',
    title: { en: 'Evolution of Cooperation in a Bimodal Mixture of Conditional Cooperators', zh: '双峰条件合作者混合物中的合作演化' },
    organization: { en: 'Remote Research Collaboration', zh: '远程研究合作' },
    role: { en: 'Co-author / Research Contributor', zh: '合著者 / 研究贡献者' },
    date: { en: 'July 2023 – February 2025', zh: '2023 年 7 月 – 2025 年 2 月' },
    type: 'research',
    shortDescription: {
      en: 'Co-authored paper in Physical Review E modeling adaptive cooperation via Q-learning, investigating phase transitions in evolutionary game theory.',
      zh: '在 Physical Review E 上共同发表论文，通过 Q-learning 建模自适应合作，研究进化博弈论中的相变。',
    },
    description: [
      { en: 'Applied Q-learning to model adaptive cooperation strategies in game-theoretical settings.', zh: '将 Q-learning 应用于博弈论背景下的自适应合作策略建模。' },
      { en: 'Investigated phase transitions in cooperation prevalence under different behavioral mixtures.', zh: '研究了不同行为混合下合作普遍性的相变。' },
      { en: 'Co-authored research analyzing the impact of conditional cooperation diversity on evolutionary dynamics.', zh: '共同撰写研究报告，分析条件合作多样性对进化动态的影响。' },
      { en: 'Published in Physical Review E 112, 054309 (2025). arXiv:2502.07537.', zh: '发表于 Physical Review E 112, 054309 (2025)。arXiv:2502.07537。' },
    ],
    paperLink: 'https://arxiv.org/abs/2502.07537',
    pdfLink: 'https://arxiv.org/pdf/2502.07537',
  },
  {
    id: 'powerDynamic',
    title: { en: 'Incorporating Power Dynamic in Cooperation and Defection with Reinforcement Learning', zh: '利用强化学习将权力动态纳入合作与背叛' },
    organization: { en: 'Culver Academies', zh: 'Culver Academies' },
    role: { en: 'Independent Research', zh: '独立研究' },
    date: { en: 'July 2022 – February 2023', zh: '2022 年 7 月 – 2023 年 2 月' },
    type: 'research',
    shortDescription: {
      en: 'Used Q-Table reinforcement learning to study how social hierarchy affects cooperation dynamics.',
      zh: '使用 Q-Table 强化学习研究社会等级如何影响合作动态。',
    },
    description: [
      { en: 'Utilized reinforcement learning (Q-Table) to study cooperation dynamics.', zh: '利用强化学习 (Q-Table) 研究合作动态。' },
      { en: 'Investigated the association between social hierarchy and levels of cooperation.', zh: '研究社会等级与合作水平之间的关联。' },
    ],
  },
  {
    id: 'letterRecog',
    title: { en: 'Letter Recognition with SVC, Random Forest and CNN', zh: '利用 SVC、随机森林和卷积神经网络进行字母识别' },
    organization: { en: 'Culver Academies', zh: 'Culver Academies' },
    role: { en: 'Independent Research', zh: '独立研究' },
    date: { en: 'July 2021 – February 2022', zh: '2021 年 7 月 – 2022 年 2 月' },
    type: 'research',
    shortDescription: {
      en: 'Built ML models (SVM, Random Forest, CNN) to classify alphabetical characters and digitize historical documents.',
      zh: '构建机器学习模型（SVM、随机森林、CNN）对字母字符进行分类并数字化历史文档。',
    },
    description: [
      { en: 'Built machine learning models to predict alphabetical letters and numbers.', zh: '构建机器学习模型以预测字母和数字。' },
      { en: 'Employed algorithms including Support Vector Classification, Random Forest, and Convolutional Neural Networks.', zh: '采用了支持向量分类、随机森林和卷积神经网络等算法。' },
      { en: 'Analyzed and digitized historical documents by converting them into searchable digital files.', zh: '通过将历史文档转换为可搜索的数字文件来分析和数字化。' },
    ],
  },

  // ── Teaching ──────────────────────────────────────────────────────────────
  {
    id: 'ta-cse4500',
    title: { en: 'Teaching Assistant — Video Game Programming (CSE4500)', zh: '助教 — 视频游戏编程 (CSE4500)' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Teaching Assistant', zh: '助教' },
    date: { en: 'January 2026 – Present', zh: '2026 年 1 月 – 至今' },
    type: 'teaching',
    shortDescription: {
      en: 'Supporting students in debugging assignments and understanding course concepts; evaluating homework submissions.',
      zh: '协助学生调试作业和理解课程概念；评估作业提交。',
    },
    description: [
      { en: 'Assist students in understanding course concepts and debugging assignments during office hours and online discussions.', zh: '在办公时间和在线讨论期间，协助学生理解课程概念和调试作业。' },
      { en: 'Evaluate homework submissions and provide constructive feedback.', zh: '评估作业提交并提供建设性反馈。' },
    ],
  },
  {
    id: 'ta-cse417t',
    title: { en: 'Teaching Assistant — Introduction to Machine Learning (CSE417T)', zh: '助教 — 机器学习导论 (CSE417T)' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Teaching Assistant', zh: '助教' },
    date: { en: 'January 2025 – December 2025', zh: '2025 年 1 月 – 2025 年 12 月' },
    type: 'teaching',
    shortDescription: {
      en: 'Weekly office hours, grading, and feedback for the introductory Machine Learning course.',
      zh: '为机器学习入门课程提供每周办公时间、评分和反馈。',
    },
    description: [
      { en: 'Hold weekly office hours to assist students with course material and assignments.', zh: '每周举行办公时间，协助学生解决课程材料和作业问题。' },
      { en: 'Grade homework submissions and provide constructive feedback.', zh: '批改作业提交并提供建设性反馈。' },
    ],
  },
  {
    id: 'grader-ese415',
    title: { en: 'Grader — Optimization (ESE415)', zh: '阅卷员 — 优化 (ESE415)' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Grader', zh: '阅卷员' },
    date: { en: 'January 2025 – May 2025', zh: '2025 年 1 月 – 2025 年 5 月' },
    type: 'teaching',
    shortDescription: {
      en: 'Graded homework assignments and addressed student inquiries for the graduate-level Optimization course.',
      zh: '批改作业并解答研究生优化课程的学生疑问。',
    },
    description: [
      { en: 'Grade homework assignments and provide feedback to students.', zh: '批改作业并向学生提供反馈。' },
      { en: 'Address student inquiries regarding grading and feedback.', zh: '解答学生关于评分和反馈的疑问。' },
    ],
  },
  {
    id: 'ta-cse247',
    title: { en: 'Teaching Assistant — Data Structures and Algorithms (CSE247)', zh: '助教 — 数据结构与算法 (CSE247)' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Teaching Assistant', zh: '助教' },
    date: { en: 'January 2024 – May 2025', zh: '2024 年 1 月 – 2025 年 5 月' },
    type: 'teaching',
    shortDescription: {
      en: 'Held office hours 3x/week and supported studio sessions for Data Structures and Algorithms.',
      zh: '每周举行 3 次办公时间，并为数据结构与算法提供工作室支持。',
    },
    description: [
      { en: 'Answer questions regarding class material and lab code during Office Hour for at least 3 times a week.', zh: '每周至少 3 次在办公时间回答有关课堂材料和实验代码的问题。' },
      { en: 'Support students during studio to have a hands-on experience with the material taught in class.', zh: '在工作室期间为学生提供支持，使其能够亲身体验课堂所学材料。' },
    ],
  },
  {
    id: 'ta-cse247r',
    title: { en: 'Teaching Assistant — Data Structures and Algorithms Seminar (CSE247R)', zh: '助教 — 数据结构与算法研讨会 (CSE247R)' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Teaching Assistant', zh: '助教' },
    date: { en: 'January 2024 – December 2024', zh: '2024 年 1 月 – 2024 年 12 月' },
    type: 'teaching',
    shortDescription: {
      en: 'Delivered short lessons on classic algorithms and data structures not covered in the main curriculum.',
      zh: '提供关于主课程未涵盖的经典算法和数据结构的简短课程。',
    },
    description: [
      { en: 'Ensure students have a clear understanding of various data structures and their implementation in code.', zh: '确保学生清楚理解各种数据结构及其在代码中的实现。' },
      { en: 'Introduce classic algorithms not covered in the main class curriculum to enhance students\' knowledge.', zh: '介绍主课程未涵盖的经典算法，以增强学生的知识。' },
      { en: 'Deliver short lessons covering topics related to interview preparation.', zh: '提供涵盖面试准备相关主题的简短课程。' },
    ],
  },

  // ── Activities ─────────────────────────────────────────────────────────────
  {
    id: 'ursaworks',
    title: { en: 'Ursaworks Robotics Club — Computer Vision Group', zh: 'Ursaworks 机器人俱乐部 — 计算机视觉小组' },
    organization: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    role: { en: 'Member', zh: '成员' },
    date: { en: 'January 2024 – Present', zh: '2024 年 1 月 – 至今' },
    type: 'activity',
    shortDescription: {
      en: 'Building robots and training ML models for the Robomaster Competition; collecting and labeling video datasets.',
      zh: '为 Robomaster 竞赛构建机器人和训练机器学习模型；收集和标注视频数据集。',
    },
    description: [
      { en: 'Meet weekly to collaborate on building robots and practicing driving for the Robomaster Competition.', zh: '每周开会，协作构建机器人并练习 Robomaster 竞赛的驾驶。' },
      { en: 'Assist in collecting and labeling video data to create datasets for training machine learning models.', zh: '协助收集和标注视频数据，为训练机器学习模型创建数据集。' },
      { en: 'Operate robots during competitions.', zh: '在比赛期间操作机器人。' },
    ],
  },
  {
    id: 'mathclub',
    title: { en: 'Math Club', zh: '数学俱乐部' },
    organization: { en: 'Culver Academies', zh: 'Culver Academies' },
    role: { en: 'Member / Organizer', zh: '成员 / 组织者' },
    date: { en: 'August 2021 – June 2023', zh: '2021 年 8 月 – 2023 年 6 月' },
    type: 'activity',
    shortDescription: {
      en: 'Organized meetings and activities for 30+ members; lifted school score to highest in the Rose-Hulman High School Math Contest.',
      zh: '组织了 30 多名成员的会议和活动；将学校分数提升至 Rose-Hulman 高中数学竞赛的最高分。',
    },
    description: [
      { en: 'Managed and organized club meeting handouts and activities for 30+ members.', zh: '管理和组织了 30 多名成员的俱乐部会议讲义和活动。' },
      { en: 'Lifted the school team score to the highest over the past few years in the Rose-Hulman High School Math Contest.', zh: '在 Rose-Hulman 高中数学竞赛中，将学校团队分数提升至过去几年的最高分。' },
    ],
  },
  {
    id: 'unitCommander',
    title: { en: 'Unit Commander', zh: '单位指挥官' },
    organization: { en: 'Culver Academies', zh: 'Culver Academies' },
    role: { en: 'Unit Commander (Highest Leadership Position)', zh: '单位指挥官（最高领导职位）' },
    date: { en: 'August 2022 – January 2023', zh: '2022 年 8 月 – 2023 年 1 月' },
    type: 'activity',
    shortDescription: {
      en: 'Led a unit of 43 cadets — the highest student leadership position; set goals and counseled cadets.',
      zh: '领导一个由 43 名学员组成的单位——最高的学生领导职位；设定目标并指导学员。',
    },
    description: [
      { en: 'Set goals monthly and inspired a shared vision for a unit of 43 cadets (highest leadership position).', zh: '每月设定目标，并为一个由 43 名学员组成的单位（最高领导职位）激发共同愿景。' },
      { en: 'Responsible to the unit counselor and kept him informed of all situations in the unit that merit the counselor\'s attention.', zh: '对单位辅导员负责，并及时向其通报单位内所有需要其关注的情况。' },
      { en: 'Counseled cadets having difficulty with conduct, attitude, academics, or personal problems.', zh: '为在行为、态度、学业或个人问题上遇到困难的学员提供咨询。' },
    ],
  },
];
