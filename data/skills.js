export const skillsData = [
  {
    id: 'python',
    name: { en: 'Python', zh: 'Python' },
    category: 'Programming',
    description: { en: 'Primary research language — used for ML models, RL simulations, and data processing.', zh: '主要研究语言——用于机器学习模型、强化学习模拟和数据处理。' },
    usedFor: [
      { en: 'Reinforcement learning research', zh: '强化学习研究' },
      { en: 'ML model development', zh: '机器学习模型开发' },
      { en: 'Data analysis', zh: '数据分析' },
    ],
    keyFeatures: [
      { en: 'NumPy / Pandas', zh: 'NumPy / Pandas' },
      { en: 'Scikit-learn', zh: 'Scikit-learn' },
      { en: 'TensorFlow / PyTorch', zh: 'TensorFlow / PyTorch' },
      { en: 'Q-learning simulations', zh: 'Q-learning 模拟' },
    ],
  },
  {
    id: 'java',
    name: { en: 'Java', zh: 'Java' },
    category: 'Programming',
    description: { en: 'Object-oriented programming; used extensively in Data Structures coursework and TA roles.', zh: '面向对象编程；广泛用于数据结构课程和助教工作。' },
    usedFor: [
      { en: 'Data structures implementation', zh: '数据结构实现' },
      { en: 'Algorithm design', zh: '算法设计' },
      { en: 'Course TA support', zh: '课程助教支持' },
    ],
    keyFeatures: [
      { en: 'OOP design patterns', zh: '面向对象设计模式' },
      { en: 'Collections framework', zh: '集合框架' },
      { en: 'JUnit testing', zh: 'JUnit 测试' },
    ],
  },
  {
    id: 'c-cpp',
    name: { en: 'C / C++', zh: 'C / C++' },
    category: 'Programming',
    description: { en: 'Low-level systems programming learned in CS coursework.', zh: '在计算机科学课程中学习的低级系统编程。' },
    usedFor: [
      { en: 'Systems programming', zh: '系统编程' },
      { en: 'Performance-critical algorithms', zh: '性能关键算法' },
      { en: 'CS coursework', zh: '计算机科学课程' },
    ],
    keyFeatures: [
      { en: 'Memory management', zh: '内存管理' },
      { en: 'Pointer arithmetic', zh: '指针运算' },
      { en: 'Standard libraries', zh: '标准库' },
    ],
  },
  {
    id: 'javascript',
    name: { en: 'JavaScript', zh: 'JavaScript' },
    category: 'Programming',
    description: { en: 'Web development; IBM-certified in HTML, CSS & JavaScript.', zh: 'Web 开发；获得 IBM HTML、CSS 和 JavaScript 认证。' },
    usedFor: [
      { en: 'Web development', zh: 'Web 开发' },
      { en: 'Frontend interfaces', zh: '前端界面' },
      { en: 'Interactive applications', zh: '交互式应用' },
    ],
    keyFeatures: [
      { en: 'ES6+', zh: 'ES6+' },
      { en: 'DOM manipulation', zh: 'DOM 操作' },
      { en: 'Async/await', zh: '异步/等待' },
      { en: 'React basics', zh: 'React 基础' },
    ],
  },
  {
    id: 'swift',
    name: { en: 'Swift', zh: 'Swift' },
    category: 'Programming',
    description: { en: 'iOS development language learned in coursework.', zh: '在课程中学习的 iOS 开发语言。' },
    usedFor: [
      { en: 'iOS application development', zh: 'iOS 应用程序开发' },
      { en: 'Apple ecosystem tooling', zh: 'Apple 生态系统工具' },
    ],
    keyFeatures: [
      { en: 'SwiftUI', zh: 'SwiftUI' },
      { en: 'Xcode', zh: 'Xcode' },
      { en: 'UIKit', zh: 'UIKit' },
    ],
  },
  {
    id: 'reinforcement-learning',
    name: { en: 'Reinforcement Learning', zh: '强化学习' },
    category: 'Machine Learning',
    description: { en: 'Core research tool — Q-learning applied to game theory and cooperation dynamics.', zh: '核心研究工具——Q-learning 应用于博弈论和合作动态。' },
    usedFor: [
      { en: 'Cooperation research', zh: '合作研究' },
      { en: 'Power dynamics study', zh: '权力动态研究' },
      { en: 'Agent strategy modeling', zh: '代理策略建模' },
    ],
    keyFeatures: [
      { en: 'Q-Table methods', zh: 'Q-Table 方法' },
      { en: 'Q-learning algorithm', zh: 'Q-learning 算法' },
      { en: 'Multi-agent environments', zh: '多智能体环境' },
      { en: 'Reward shaping', zh: '奖励塑造' },
    ],
  },
  {
    id: 'ml-models',
    name: { en: 'Classical ML', zh: '经典机器学习' },
    category: 'Machine Learning',
    description: { en: 'SVM, Random Forest, and ensemble methods applied to classification tasks.', zh: '支持向量机、随机森林和集成方法应用于分类任务。' },
    usedFor: [
      { en: 'Letter recognition', zh: '字母识别' },
      { en: 'Character classification', zh: '字符分类' },
      { en: 'Document digitization', zh: '文档数字化' },
    ],
    keyFeatures: [
      { en: 'Support Vector Classification', zh: '支持向量分类' },
      { en: 'Random Forest', zh: '随机森林' },
      { en: 'Cross-validation', zh: '交叉验证' },
      { en: 'Feature engineering', zh: '特征工程' },
    ],
  },
  {
    id: 'deep-learning',
    name: { en: 'Deep Learning / CNNs', zh: '深度学习 / 卷积神经网络' },
    category: 'Machine Learning',
    description: { en: 'Convolutional Neural Networks for image and character recognition tasks.', zh: '用于图像和字符识别任务的卷积神经网络。' },
    usedFor: [
      { en: 'Letter & digit recognition', zh: '字母和数字识别' },
      { en: 'Computer vision (Robomaster)', zh: '计算机视觉 (Robomaster)' },
      { en: 'Historical document processing', zh: '历史文档处理' },
    ],
    keyFeatures: [
      { en: 'CNN architecture', zh: '卷积神经网络架构' },
      { en: 'Model training / fine-tuning', zh: '模型训练 / 微调' },
      { en: 'Data augmentation', zh: '数据增强' },
      { en: 'TensorFlow', zh: 'TensorFlow' },
    ],
  },
  {
    id: 'differential-topology',
    name: { en: 'Differential Topology', zh: '微分拓扑' },
    category: 'Mathematics',
    description: { en: 'Current research focus: smooth manifolds and de Rham cohomology under Prof. Yanli Song.', zh: '当前研究重点：在宋雁离教授指导下的光滑流形和 de Rham 上同调。' },
    usedFor: [
      { en: 'Research at WashU', zh: '华大研究' },
      { en: 'Cohomology computation', zh: '上同调计算' },
      { en: 'Topological classification', zh: '拓扑分类' },
    ],
    keyFeatures: [
      { en: 'Smooth manifolds', zh: '光滑流形' },
      { en: 'Differential forms', zh: '微分形式' },
      { en: 'Mayer–Vietoris sequences', zh: 'Mayer–Vietoris 序列' },
      { en: 'de Rham theorem', zh: 'de Rham 定理' },
    ],
  },
  {
    id: 'optimization',
    name: { en: 'Optimization', zh: '优化' },
    category: 'Mathematics',
    description: { en: 'Theoretical and applied optimization; also graded ESE415 Optimization at WashU.', zh: '理论和应用优化；同时在华大批改 ESE415 优化课程。' },
    usedFor: [
      { en: 'Graduate coursework grading', zh: '研究生课程评分' },
      { en: 'Algorithm design', zh: '算法设计' },
      { en: 'ML model tuning', zh: '机器学习模型调优' },
    ],
    keyFeatures: [
      { en: 'Convex optimization', zh: '凸优化' },
      { en: 'Gradient methods', zh: '梯度方法' },
      { en: 'Duality', zh: '对偶' },
      { en: 'Linear programming', zh: '线性规划' },
    ],
  },
  {
    id: 'statistics',
    name: { en: 'Statistics & Probability', zh: '统计与概率' },
    category: 'Mathematics',
    description: { en: 'Foundational for all research — statistical testing, distributions, and inference.', zh: '所有研究的基础——统计检验、分布和推断。' },
    usedFor: [
      { en: 'Research analysis', zh: '研究分析' },
      { en: 'Phase transition modeling', zh: '相变建模' },
      { en: 'Evolutionary dynamics', zh: '进化动力学' },
    ],
    keyFeatures: [
      { en: 'Hypothesis testing', zh: '假设检验' },
      { en: 'Statistical inference', zh: '统计推断' },
      { en: 'Probability theory', zh: '概率论' },
      { en: 'Stochastic processes', zh: '随机过程' },
    ],
  },
  {
    id: 'git',
    name: { en: 'Git & GitHub', zh: 'Git 与 GitHub' },
    category: 'Tools',
    description: { en: 'Version control for research code and projects. IBM-certified.', zh: '研究代码和项目的版本控制。IBM 认证。' },
    usedFor: [
      { en: 'Research code management', zh: '研究代码管理' },
      { en: 'Collaborative projects', zh: '协作项目' },
      { en: 'Robotics club work', zh: '机器人俱乐部工作' },
    ],
    keyFeatures: [
      { en: 'Branching strategies', zh: '分支策略' },
      { en: 'Pull requests', zh: '拉取请求' },
      { en: 'Collaborative workflows', zh: '协作工作流' },
    ],
  },
  {
    id: 'ms-office',
    name: { en: 'Microsoft Office', zh: 'Microsoft Office' },
    category: 'Tools',
    description: { en: 'Professional productivity tools used for research documentation and teaching.', zh: '用于研究文档和教学的专业生产力工具。' },
    usedFor: [
      { en: 'Research documentation', zh: '研究文档' },
      { en: 'Course material preparation', zh: '课程材料准备' },
      { en: 'Grading', zh: '评分' },
    ],
    keyFeatures: [
      { en: 'Word', zh: 'Word' },
      { en: 'Excel', zh: 'Excel' },
      { en: 'PowerPoint', zh: 'PowerPoint' },
    ],
  },
  {
    id: 'computer-vision',
    name: { en: 'Computer Vision', zh: '计算机视觉' },
    category: 'Machine Learning',
    description: { en: 'Applied in Robomaster robotics club for object detection and autonomous navigation.', zh: '应用于 Robomaster 机器人俱乐部，用于对象检测和自主导航。' },
    usedFor: [
      { en: 'Robomaster competition', zh: 'Robomaster 竞赛' },
      { en: 'Robot target detection', zh: '机器人目标检测' },
      { en: 'Video dataset labeling', zh: '视频数据集标注' },
    ],
    keyFeatures: [
      { en: 'Object detection', zh: '对象检测' },
      { en: 'Video processing', zh: '视频处理' },
      { en: 'Dataset labeling', zh: '数据集标注' },
      { en: 'Model training', zh: '模型训练' },
    ],
  },
];

export const skillCategories = [
  {
    title: { en: 'Programming Languages', zh: '编程语言' },
    skills: [
      { name: { en: 'Python', zh: 'Python' }, proficiency: 92 },
      { name: { en: 'Java', zh: 'Java' }, proficiency: 85 },
      { name: { en: 'C / C++', zh: 'C / C++' }, proficiency: 75 },
      { name: { en: 'JavaScript / HTML / CSS', zh: 'JavaScript / HTML / CSS' }, proficiency: 72 },
      { name: { en: 'Swift', zh: 'Swift' }, proficiency: 60 },
    ],
  },
  {
    title: { en: 'Machine Learning & AI', zh: '机器学习与人工智能' },
    skills: [
      { name: { en: 'Reinforcement Learning', zh: '强化学习' }, proficiency: 88 },
      { name: { en: 'Convolutional Neural Networks', zh: '卷积神经网络' }, proficiency: 80 },
      { name: { en: 'Support Vector Machines', zh: '支持向量机' }, proficiency: 82 },
      { name: { en: 'Random Forests', zh: '随机森林' }, proficiency: 83 },
      { name: { en: 'Computer Vision', zh: '计算机视觉' }, proficiency: 75 },
    ],
  },
  {
    title: { en: 'Mathematics', zh: '数学' },
    skills: [
      { name: { en: 'Differential Topology', zh: '微分拓扑' }, proficiency: 80 },
      { name: { en: 'Linear Algebra', zh: '线性代数' }, proficiency: 90 },
      { name: { en: 'Optimization', zh: '优化' }, proficiency: 82 },
      { name: { en: 'Probability & Statistics', zh: '概率与统计' }, proficiency: 88 },
    ],
  },
  {
    title: { en: 'Tools & Platforms', zh: '工具与平台' },
    skills: [
      { name: { en: 'Git / GitHub', zh: 'Git / GitHub' }, proficiency: 85 },
      { name: { en: 'Microsoft Office', zh: 'Microsoft Office' }, proficiency: 90 },
      { name: { en: 'LaTeX', zh: 'LaTeX' }, proficiency: 70 },
    ],
  },
];
