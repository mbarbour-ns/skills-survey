// This is a stub for actually database table reads
let dbResults = {
    user:[
        {name_first:"Candice", name_last:"Whiskey",employee_no:"123455", email:"",TZ:"",active:"Y", role:'',deleted:"N"},
    ],
    user_type:[
        {field:'employee_no',type:'char(20)' },
        {field:'name_last',type:'char(255)' },
        {field:'name_first',type:'char(255)' },
        {field:'name_middle',type:'char(255)' },
        {field:'active',type:'tinyint(1)' },
        {field:'deleted',type:'tinyint(1)' },
    ],
    user_type_map:{
        'employee_no':'char(20)',
        'name_last':'char(20)',
        'employee_no':'char(20)',
        'active':'tinyint(1)',
        'deleted':'tinyint(1)',
    },
	levelList : [
		'unknown',
		'know_what_its_for',
		'operationally_understood',
		'used_frequently',
		'used_frequently_and_in_depth',
	],
	methodList : [
		'unused',
		'can_use_via_console',
		'can_use_via_CLI',
		'can_integrate_with_Tooling',
		'can_configure_via_console',
		'can_configure_via_CLI',
		'can_configure_via_IaC',
		'can_configure_in_multi_regions',	
		'can_extend_with_custom_tools',
	],
	acquiredByList : [
		'none',
		'observation',//'personal/tutorial',// study
		'study',//'BootCamp',// training
		'usage',//'OJT',// usage
		'training',//'Stelligent U',
		'certification',
		'degree'
	],
    roleList : [
        'none',
        'technician',
        'engineer',
        'team lead',
        'architect',
        'SME',
    ],
	currencyList : [
		'never',
		'stale',
		'fresh',
		'active',
	],
	serviceList : [
		'API Gateway',
		'CloudEndure',
		'CloudFormation',
		'CloudFront',
		'CloudTrail',
		'CloudWatch',
		'Code*',
		'Cognito',
		'Control Tower',
		'Data Pipeline',
		'DynamoDB',
		'EBS',
		'EC2',
		'ECR',
		'EFS',
		'EKS',
		'ElastiCache',
		'ELB',
		'Glacier',
		'Glue',
		'GuardDuty',
		'IAM',
		'IGW',
		'Inspector',
		'Lambda',
		'Landing Zone',
		'Lightsail',
		'RDS',
		'RedShift',
		'Rekognition',
		'S3',
		'SageMaker',
		'Service Catalog',
		'SNS',
		'SQS',
		'Step functions',
		'Storage Gateway',
		'VPC',
	],

	certList : [
		'DevOps Assoc',
		'DevOps Pro',
		'Solutions Architect Assoc',
		'Solutions Architect Pro',
		'SysOps Administrator Assoc',
		'Advanced Networking - Specialty',
		'Data Analytics - Specialty',
		'Security - Specialty',
		'Machine Learning - Specialty',
		'Database - Specialty',
		'Cloud Practitioner',
	],

	devLanguageList : [
		'BASH',
		'C',
		'C++',
		'C#/.NET',
		'GoLang',
		'Groovy',
		'Java',
		'NodeJS',
		'PowerShell',
		'Python',
		'Ruby',
		'WindowsOS',
		'MacOSX',
		'Linux',
		'Unix',
		'Android',
	],

	devToolList : [
		'Code*',
		'Docker',
		'GitLab',
		'GitHub',
		'Jasmine',
		'Parameter Store',
		'PyLint',
		'PyTest',
		'Secrets Manager',
		'TDD/BDD Method',
		'Vault',
		'VSCode',
	],

	devOpsList : [
		'Terraform',
		'CloudFormation',
		'Ansible',
		'Jenkins',
		'Bamboo',
		'CircleCI',
		'Saltstack',
	],

	devSecOpsList : [
		'Standards',
		'SCA',
		'SAST',
		'IAST',
		'Best Practices',
		'AWS',
		'Stelligent',
		'Security Frameworks',
		'BlackDuck',
		'Guardrails',
		'Checkmarx',
		'Tooling',
		'Custom',
	],

	dataOpsList : [
		'Data Lake',
	],

	mlOpsList : [
		'SageMaker',
		'Glue',
	],

	consultingList : [
		'Cost Benefit Analysis',
		'Phoenix Project',
		'DevOps Handbook',
		'AWS Best Practices',
		'Well Architected Design',
		'Security Assessment',
	],

	specialtiesList : [// specialties
		'AppDev - Desktop',
		'FirmwareDev',
		'IoT Dev',
		'Web AppDev - Front End',
		'Web AppDev - Back End',
		'Mobile Dev',
		'DevOps Automation',
		'DevSecOps Automation',
		'DataOps Automation',
		'MLOps Automation',
		'SysAdmin',
		'Site Reliability Engineer',
		'NetworkAdmin',
	],

	DevOpsImplementationList : [
		'Artifact',
		'Infrastructure as Code', 
		'Automated Pipeline', 
		'Fail fast',
		'Inline Testing',
		'Least privileged access', 
		'Logging',
		'Alerts and Alarms', 
		'Automatic Recovery', 
		'Auto-scaling policy',
		'Dashboarding',
	],

	DevOpsAutoIntegrationList : [
		'Application Code',
		'Infrastructure',
		'PipeLines',
		'App Testing',
		'Infrastructure Testing',
		'Logging',
		'A&E Notifications',
		'Dashboards',
		'Least Privileged SCPs',
		'AutoScaling',
		'Infrastructure AutoRemidiation',
		'PipeLine Factories'
	],

	ConsultantsList : [
		"- Consultant -",
		"John Ulick",
		"John Mitchell",
		"Jory Garrido",
		"Kevin Formsma",
		"Matthew Morgan",
		"Patrick Gallagher",
		"Robert Jackson",
		"Sam Elkhateeb",
		"Shawn Aucoin",
		"Zachary Job",
		"Zachery Cox",
	],
}
