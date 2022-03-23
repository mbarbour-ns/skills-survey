USE `skills_survey`;

DROP TABLE IF EXISTS `level_list`;
CREATE TABLE `level_list` (
	rid			integer unsigned AUTO_INCREMENT,
	list_text	varchar(2048),
	list_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `method_list`;
CREATE TABLE `level_list` (
	rid			integer unsigned AUTO_INCREMENT,
	method_text	varchar(2048),
	method_date	DATETIME,
	current		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
	rid			integer unsigned AUTO_INCREMENT,
	employee_no	CHAR(20),
	name_last	CHAR(255),
	name_first	CHAR(255),
	name_middle	CHAR(255),
	active		boolean,
	deleted		boolean,
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `role`;
CREATE TABLE `user` (
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



DROP TABLE IF EXISTS ``;
CREATE TABLE `` (
	rid		integer unsigned AUTO_INCREMENT,
	PRIMARY KEY(`rid`)
);
