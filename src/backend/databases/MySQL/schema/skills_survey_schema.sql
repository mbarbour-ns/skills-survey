USE `skills_survey`;

DROP TABLE IF EXISTS `level_list`;
CREATE TABLE `level_list` (
	rid			integer unsigned AUTO_INCREMENT,
	list_text	varchar(2048),
	list_date	DATETIME,
	current		boolean,
	PRIMARY KEY(`rid`)
);

DROP TABLE IF EXISTS `method_list`;
CREATE TABLE `level_list` (
	rid			integer unsigned AUTO_INCREMENT,
	method_text	varchar(2048),
	method_date	DATETIME,
	current		boolean,
	PRIMARY KEY(`rid`)
);




DROP TABLE IF EXISTS ``;
CREATE TABLE `` (
	rid		integer unsigned AUTO_INCREMENT,
	PRIMARY KEY(`rid`)
);
DROP TABLE IF EXISTS ``;
CREATE TABLE `` (
	rid		integer unsigned AUTO_INCREMENT,
	PRIMARY KEY(`rid`)
);
