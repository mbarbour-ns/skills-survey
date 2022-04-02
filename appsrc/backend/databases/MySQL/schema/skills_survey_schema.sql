USE `skills_survey`;

DROP TABLE IF EXISTS `adm_user`;
CREATE TABLE `adm_user` (
	rid			integer unsigned AUTO_INCREMENT,
	employee_no	CHAR(20),
	name_last	CHAR(255),
	name_first	CHAR(255),
	name_middle	CHAR(255),
	email		CHAR(255),
	active		boolean,
	deleted		boolean,
	harvest_id	CHAR(20),
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `adm_role`;
CREATE TABLE `adm_role` (
	rid			integer unsigned AUTO_INCREMENT,
	label		CHAR(255),
	admin		boolean,
	manager		boolean,
	resource	boolean,
	guest		boolean,
	currentcy	DATETIME,
	active		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `adm_xs`;
CREATE TABLE `adm_xs` (
	rid			integer unsigned AUTO_INCREMENT,
	user_rid	integer unsigned,
	user_xs		CHAR(255),
	currentcy	DATETIME,
	active		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

-- globally used lists
DROP TABLE IF EXISTS `global_level_list`;
CREATE TABLE `global_level_list` (
	rid			integer unsigned AUTO_INCREMENT,
	list_text	varchar(2048),
	list_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `global_method_list`;
CREATE TABLE `global_method_list` (
	rid			integer unsigned AUTO_INCREMENT,
	method_text	varchar(2048),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `global_acquiredby_list`;
CREATE TABLE `global_acquiredby_list` (
	rid			integer unsigned AUTO_INCREMENT,
	acquiredby_text	varchar(2048),
	acquiredby_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

-- individual subject lists
DROP TABLE IF EXISTS `survey_list_dev_tools_expertise`;
CREATE TABLE `survey_list_dev_tools_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_aws_services`;
CREATE TABLE `survey_list_aws_services` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_aws_services`;
CREATE TABLE `survey_list_aws_services` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_dev_language_expertise`;
CREATE TABLE `survey_list_dev_language_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_devops_expertise`;
CREATE TABLE `survey_list_devops_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_devsecops_expertise`;
CREATE TABLE `survey_list_devsecops_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_dataops_expertise`;
CREATE TABLE `survey_list_dataops_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS `survey_list_mlops_expertise`;
CREATE TABLE `survey_list_mlops_expertise` (
	rid			integer unsigned AUTO_INCREMENT,
	item		CHAR(255),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);


DROP TABLE IF EXISTS `harvest_temp`;
CREATE TABLE `harvest_temp` (
	harvest_id char(20) UNIQUE,
    name_last   char(255),
    name_first  char(255),
    email       char(255),
    telephone  char(20),
    timezone  char(255),
    employee_no char(10)
);



