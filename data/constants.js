import { BookOpen, Brain, GraduationCap } from 'lucide-react';

export const targetRoles = [
  { en: 'Math PhD Programs', zh: '数学博士项目' },
  { en: 'Research Internships', zh: '科研实习' },
  { en: 'Applied Mathematics Research', zh: '应用数学研究' },
  { en: 'Machine Learning Research', zh: '机器学习研究' },
];

export const competencies = [
  {
    icon: BookOpen,
    title: { en: 'Mathematical Research', zh: '数学研究' },
    description: {
      en: 'Studying smooth manifolds, de Rham cohomology, and topological invariants under faculty supervision at WashU',
      zh: '在圣路易斯华盛顿大学教授指导下研究光滑流形、de Rham 上同调和拓扑不变量',
    },
  },
  {
    icon: Brain,
    title: { en: 'Machine Learning & AI', zh: '机器学习与人工智能' },
    description: {
      en: 'Reinforcement learning, Q-learning, CNNs, SVMs, and Random Forests applied to game-theoretical and classification problems',
      zh: '将强化学习、Q-learning、卷积神经网络、支持向量机和随机森林应用于博弈论和分类问题',
    },
  },
  {
    icon: GraduationCap,
    title: { en: 'Computer Science Education', zh: '计算机科学教育' },
    description: {
      en: 'Teaching assistant for 5 courses at WashU including ML, Data Structures, Video Game Programming, and Optimization',
      zh: '担任圣路易斯华盛顿大学 5 门课程的助教，包括机器学习、数据结构、视频游戏编程和优化',
    },
  },
];

export const timeline = [
  {
    year: { en: '2026 – Present', zh: '2026 – 至今' },
    title: { en: 'de Rham Cohomology Research', zh: 'de Rham 上同调研究' },
    description: {
      en: 'Studying smooth manifolds under Prof. Yanli Song; computing cohomology via Mayer–Vietoris sequences',
      zh: '在宋雁离教授指导下研究光滑流形；通过 Mayer–Vietoris 序列计算上同调',
    },
    type: 'research',
  },
  {
    year: { en: '2026 – Present', zh: '2026 – 至今' },
    title: { en: 'Teaching Assistant — Video Game Programming (CSE4500)', zh: '助教 — 视频游戏编程 (CSE4500)' },
    description: {
      en: 'Assisting students with debugging and course concepts; evaluating homework submissions at WashU',
      zh: '协助学生进行调试和理解课程概念；评估圣路易斯华盛顿大学的作业提交',
    },
    type: 'teaching',
  },
  {
    year: { en: '2023 – 2026', zh: '2023 – 2026' },
    title: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
    description: {
      en: 'Double Major in Computer Science & Mathematics, McKelvey School of Engineering',
      zh: '计算机科学与数学双专业，麦凯维工程学院',
    },
    type: 'education',
  },
  {
    year: { en: '2023 – 2025', zh: '2023 – 2025' },
    title: { en: 'Evolution of Cooperation Research', zh: '合作演化研究' },
    description: {
      en: 'Co-authored paper in Physical Review E on conditional cooperators modeled via Q-learning',
      zh: '在 Physical Review E 上共同发表了关于通过 Q-learning 建模的条件合作者的论文',
    },
    type: 'research',
  },
  {
    year: { en: '2021 – 2023', zh: '2021 – 2023' },
    title: { en: 'Culver Academies', zh: 'Culver Academies' },
    description: {
      en: 'Cum Laude, Blue Key, Honors in CS & Mathematics, Unit Commander (43 cadets)',
      zh: 'Cum Laude，Blue Key，计算机科学与数学荣誉学位，单位指挥官（43 名学员）',
    },
    type: 'education',
  },
  {
    year: { en: '2021 – 2022', zh: '2021 – 2022' },
    title: { en: 'Letter Recognition ML Research', zh: '字母识别机器学习研究' },
    description: {
      en: 'Built SVC, Random Forest, and CNN models to classify alphabetical characters from historical documents',
      zh: '构建了 SVC、随机森林和卷积神经网络模型，用于对历史文档中的字母字符进行分类',
    },
    type: 'research',
  },
];

export const opportunityGroups = [
  {
    category: { en: 'Graduate Research', zh: '研究生研究' },
    roles: [
      { en: 'Mathematics PhD', zh: '数学博士' },
      { en: 'Applied Mathematics PhD', zh: '应用数学博士' },
      { en: 'Computer Science PhD', zh: '计算机科学博士' },
    ],
  },
  {
    category: { en: 'Research Internships', zh: '科研实习' },
    roles: [
      { en: 'ML Research Intern', zh: '机器学习研究实习生' },
      { en: 'Applied Math Research', zh: '应用数学研究' },
      { en: 'Computational Science', zh: '计算科学' },
    ],
  },
  {
    category: { en: 'Industry', zh: '行业' },
    roles: [
      { en: 'Software Engineering Intern', zh: '软件工程实习生' },
      { en: 'Data Science Intern', zh: '数据科学实习生' },
    ],
  },
];

export const contactInfo = {
  email: 'f.jerry@wustl.edu',
  phone: '(949)-709-6611',
  location: { en: 'Washington University in St. Louis', zh: '圣路易斯华盛顿大学' },
  locationNote: { en: 'St. Louis, MO', zh: '密苏里州圣路易斯' },
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/xinshifeng/',
  github: 'https://github.com/XinshiFeng',
  arxiv: 'https://arxiv.org/abs/2502.07537',
};

export const tickerTerms = [
  { en: 'de Rham Cohomology', zh: 'de Rham 上同调' },
  { en: 'Reinforcement Learning', zh: '强化学习' },
  { en: 'Smooth Manifolds', zh: '光滑流形' },
  { en: 'Q-Learning', zh: 'Q-Learning' },
  { en: 'Mayer–Vietoris Sequences', zh: 'Mayer–Vietoris 序列' },
  { en: 'Convolutional Neural Networks', zh: '卷积神经网络' },
  { en: 'Game Theory', zh: '博弈论' },
  { en: 'Topological Invariants', zh: '拓扑不变量' },
  { en: 'Support Vector Machines', zh: '支持向量机' },
  { en: 'Evolutionary Dynamics', zh: '进化动力学' },
  { en: 'Data Structures & Algorithms', zh: '数据结构与算法' },
  { en: 'Phase Transitions', zh: '相变' },
  { en: 'Random Forests', zh: '随机森林' },
  { en: 'Linear Algebra', zh: '线性代数' },
  { en: 'Computer Vision', zh: '计算机视觉' },
];

export const kpiMetrics = [
  { label: { en: 'Research Projects', zh: '科研项目' }, value: '4' },
  { label: { en: 'TA & Grader Roles', zh: '助教与阅卷岗位' }, value: '5' },
  { label: { en: 'Published Paper', zh: '发表论文' }, value: '1' },
  { label: { en: 'Programming Languages', zh: '编程语言' }, value: '8+' },
];

export const aboutKpiMetrics = [
  { label: { en: 'Research Projects', zh: '科研项目' }, value: '4' },
  { label: { en: 'TA Semesters', zh: '助教学期' }, value: '6+' },
  { label: { en: 'Dean\'s List Terms', zh: '院长名单学期' }, value: '4' },
  { label: { en: 'Available', zh: '空闲时间' }, value: 'Fall 2027', condensed: true },
];
