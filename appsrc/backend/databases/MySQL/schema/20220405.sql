-- MySQL dump 10.13  Distrib 5.7.20, for macos10.12 (x86_64)
--
-- Host: localhost    Database: skills_survey
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm_role`
--

DROP TABLE IF EXISTS `adm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_role` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `label` char(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `manager` tinyint(1) DEFAULT NULL,
  `resource` tinyint(1) DEFAULT NULL,
  `guest` tinyint(1) DEFAULT NULL,
  `currentcy` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_role`
--

LOCK TABLES `adm_role` WRITE;
/*!40000 ALTER TABLE `adm_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_user`
--

DROP TABLE IF EXISTS `adm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_user` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `employee_no` char(20) DEFAULT NULL,
  `name_last` char(255) DEFAULT NULL,
  `name_first` char(255) DEFAULT NULL,
  `name_middle` char(255) DEFAULT NULL,
  `email` char(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `harvest_id` char(20) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=335 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_user`
--

LOCK TABLES `adm_user` WRITE;
/*!40000 ALTER TABLE `adm_user` DISABLE KEYS */;
INSERT INTO `adm_user` VALUES (255,'2506476','Baker','Nathan',NULL,'nathan.baker@stelligent.com',1,NULL,'4171372'),(256,'2507552','Ndambi','Desmond',NULL,'desmond.ndambi@stelligent.com',1,NULL,'4154013'),(257,'2487025','Cox','Zachery',NULL,'zachery.cox@stelligent.com',1,NULL,'4058886'),(258,'2486435','Whitehead','Daniel',NULL,'daniel.whitehead@stelligent.com',1,NULL,'4058884'),(259,'2487551','Adeniji','Kenny',NULL,'kehinde.adeniji@stelligent.com',1,NULL,'4050364'),(260,'2487646','Kembi','Adekunle',NULL,'adekunle.kembi@stelligent.com',1,NULL,'4047483'),(261,'2485145','Provencher','Stephen',NULL,'stephen.provencher@stelligent.com',1,NULL,'4038654'),(262,'2483888','Job','Zachary',NULL,'zachary.job@stelligent.com',1,NULL,'4038652'),(263,'2483917','Onor','Paschal',NULL,'paschal.onor@stelligent.com',1,NULL,'4031912'),(264,'2484206','Click','James',NULL,'ryan.click@stelligent.com',1,NULL,'4031910'),(265,'2483428','Marentis','Andrew',NULL,'andrew.marentis@stelligent.com',1,NULL,'4022926'),(266,'2476507','Ufondu','Uzo',NULL,'uzodinma.ufondu@stelligent.com',1,NULL,'3993237'),(267,'2477386','Redden','Jeremiah',NULL,'jeremiah.redden@stelligent.com',0,NULL,'3985379'),(268,'2477018','Jia','Irene',NULL,'zhuoyan.jia@stelligent.com',1,NULL,'3985375'),(269,'2476647','Matos','Joao',NULL,'joao.matos@stelligent.com',1,NULL,'3978077'),(270,'2473963','Harper','Onyebuchi',NULL,'onyebuchi.harper@stelligent.com',1,NULL,'3975065'),(271,'2473939','Deng','Goldeng',NULL,'goldeng.deng@stelligent.com',1,NULL,'3965028'),(272,'2474245','Kwiatkowski','Jakub',NULL,'jakub.kwiatkowski@stelligent.com',0,NULL,'3963118'),(273,'2468121','Pucynski','Karol',NULL,'karol.pucynski@stelligent.com',1,NULL,'3954712'),(274,'2471506','Little','Paul',NULL,'paul.little@stelligent.com',1,NULL,'3954477'),(275,'2467901','Lewon','Ryan',NULL,'ryan.lewon@stelligent.com',1,NULL,'3926385'),(276,'2467907','Thompson','Troy',NULL,'troy.thompson@stelligent.com',1,NULL,'3926383'),(277,'2467909','McElreath','Mike',NULL,'michael.mcelreath@stelligent.com',1,NULL,'3926381'),(278,'2466472','Brunck','Paul',NULL,'paul.brunck@stelligent.com',0,NULL,'3918921'),(279,'2466482','Mosher','Bennie',NULL,'benjamin.mosher@stelligent.com',0,NULL,'3918919'),(280,'2465059','Barros','James',NULL,'james.barros@stelligent.com',0,NULL,'3910202'),(281,'251497','Stockton','Daniel',NULL,'daniel.stockton@stelligent.com',0,NULL,'3900178'),(282,'2460927','O\'Gorman','Garrett',NULL,'garrett.ogorman@stelligent.com',0,NULL,'3873538'),(283,'2458212','McGrady','Joel',NULL,'joel.mcgrady@stelligent.com',1,NULL,'3862541'),(284,'2458350','Bochenek','Ryan',NULL,'ryan.bochenek@stelligent.com',1,NULL,'3862540'),(285,'2456025','Morgan','Matthew',NULL,'matthew.morgan@stelligent.com',1,NULL,'3847508'),(286,'2454914','Ji','Brian',NULL,'brian.ji@stelligent.com',1,NULL,'3835662'),(287,'2452620','Awe','Ayodeji',NULL,'ayodeji.awe@stelligent.com',0,NULL,'3829751'),(288,'2450740','Silver','Richard',NULL,'richard.silver@stelligent.com',0,NULL,'3826454'),(289,'2445101','Bryant','Derrick',NULL,'derrick.bryant@stelligent.com',1,NULL,'3817796'),(290,'2445860','Shenk','Kyle',NULL,'kyle.shenk@stelligent.com',1,NULL,'3805837'),(291,'2447504','Hunter','John',NULL,'john.hunter@stelligent.com',1,NULL,'3805833'),(292,'2444655','Piaggio','Pablo',NULL,'pablo.piaggio@stelligent.com',0,NULL,'3792851'),(293,'2445400','Anbuselvam','Ajaymehul',NULL,'ajaymehul.anbuselvam@stelligent.com',1,NULL,'3792850'),(294,'2444659','Garrido','Jory',NULL,'jory.garrido@stelligent.com',1,NULL,'3792849'),(295,'2446058','Cessnun','Casey',NULL,'casey.cessnun@stelligent.com',0,NULL,'3792846'),(296,'2440892','Garcia','Brandon',NULL,'brandon.garcia@stelligent.com',0,NULL,'3774046'),(297,'2438758','Holmes','Matthew',NULL,'matthew.holmes@stelligent.com',1,NULL,'3749838'),(298,'2438760','Falzone','Mariana',NULL,'mariana.falzone@stelligent.com',0,NULL,'3749836'),(299,'2437060','Harber','Barrett',NULL,'barrett.harber@stelligent.com',1,NULL,'3749833'),(300,'2434042','Haughie','Ely Erin',NULL,'ely.haughie@stelligent.com',0,NULL,'3721661'),(301,'2359969','Chatterton','Nell',NULL,'nell.chatterton@stelligent.com',1,NULL,'3706682'),(302,'2423831','Kavuru','Raja',NULL,'raja.kavuru@stelligent.com',0,NULL,'3658006'),(303,'2421331','Bekenov','Nathan',NULL,'nathan.bekenov@stelligent.com',1,NULL,'3647060'),(304,'2421322','Mitchell','John',NULL,'john.mitchell@stelligent.com',1,NULL,'3636775'),(305,'2421340','Dix','Josh',NULL,'joshua.dix@stelligent.com',0,NULL,'3636773'),(306,'2419907','Bronosky','Bruno',NULL,'richard.bronosky@stelligent.com',1,NULL,'3625442'),(307,'2419898','Kelley','Thomas',NULL,'thomas.kelley@stelligent.com',0,NULL,'3625390'),(308,'2417943','Rogers','Conor',NULL,'conor.rogers@stelligent.com',1,NULL,'3597900'),(309,'2413293','Bah Bioh','Desire',NULL,'desire.bahbioh@stelligent.com',1,NULL,'3547922'),(310,'2412086','Davis','Jason',NULL,'jason.davis@stelligent.com',0,NULL,'3536385'),(311,'2409297','Tathineni','Pradeep',NULL,'pradeep.tathineni@stelligent.com',0,NULL,'3506224'),(312,'2405832','Elkhateeb','Sam',NULL,'sohaib.elkhateeb@stelligent.com',1,NULL,'3432393'),(313,'service-ac','Automation','Delivery',NULL,'delivery-automation@stelligent.com',0,NULL,'3171419'),(314,'team-mike-','Reddy','Ramchandra',NULL,'ramchandra.reddy@stelligent.com',0,NULL,'3171143'),(315,'2380404','Gallagher','Patrick',NULL,'patrick.gallagher@stelligent.com',1,NULL,'3100107'),(316,'2379998','Ybarra','Darren',NULL,'darren.ybarra@stelligent.com',0,NULL,'3088321'),(317,'2377410','Williams','Xavier',NULL,'xavier.williams@stelligent.com',0,NULL,'3053741'),(318,'2375052','Nixon','Scott',NULL,'scott.nixon@stelligent.com',0,NULL,'3020728'),(319,'2373116','Lin','Hank (Yonghang)',NULL,'hank.lin@stelligent.com',1,NULL,'3005858'),(320,'2373670','Barbour','Mike',NULL,'michael.barbour@stelligent.com',1,NULL,'2996804'),(321,'2373669','Nathan','Paul',NULL,'paul.nathan@stelligent.com',0,NULL,'2996800'),(322,'2191982','Schwarzenau','Frank',NULL,'frank.schwarzenau@stelligent.com',1,NULL,'2996795'),(323,'2373416','Madhavan','Anoop',NULL,'anoop.madhavan@stelligent.com',0,NULL,'2991360'),(324,'2373021','Jaeger','Christopher',NULL,'chris.jaeger@stelligent.com',0,NULL,'2978886'),(325,'2110389','AC','Jagadeesh',NULL,'jagadeesh.ac@stelligent.com',0,NULL,'2977502'),(326,'2373020','Whiskey','Candice',NULL,'candice.whiskey@stelligent.com',1,NULL,'2974684'),(327,'2372756','Flannery','John',NULL,'john.flannery@stelligent.com',0,NULL,'2974677'),(328,'2372477','Millner','Trevor',NULL,'trevor.millner@stelligent.com',0,NULL,'2967296'),(329,'2372089','Rodriguez','Josue',NULL,'josue.rodriguez@stelligent.com',0,NULL,'2959658'),(330,'2371891','Cooke','Steven',NULL,'steven.cooke@stelligent.com',0,NULL,'2948434'),(331,'2371572','Rich','Addie',NULL,'addie.rich@stelligent.com',0,NULL,'2942567'),(332,'2371451','Rascher','William',NULL,'william.rascher@stelligent.com',0,NULL,'2942549'),(333,'2371491','Smith','Gabriel',NULL,'gabriel.smith@stelligent.com',1,NULL,'2942541'),(334,'2371489','Todorof','Miles',NULL,'miles.todorof@stelligent.com',0,NULL,'2942525');
/*!40000 ALTER TABLE `adm_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_xs`
--

DROP TABLE IF EXISTS `adm_xs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_xs` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_rid` int(10) unsigned DEFAULT NULL,
  `user_xs` char(255) DEFAULT NULL,
  `currentcy` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_xs`
--

LOCK TABLES `adm_xs` WRITE;
/*!40000 ALTER TABLE `adm_xs` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_xs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_acquiredby_list`
--

DROP TABLE IF EXISTS `global_acquiredby_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_acquiredby_list` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `acquiredby_text` varchar(2048) DEFAULT NULL,
  `acquiredby_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_acquiredby_list`
--

LOCK TABLES `global_acquiredby_list` WRITE;
/*!40000 ALTER TABLE `global_acquiredby_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_acquiredby_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_level_list`
--

DROP TABLE IF EXISTS `global_level_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_level_list` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `list_text` varchar(2048) DEFAULT NULL,
  `list_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_level_list`
--

LOCK TABLES `global_level_list` WRITE;
/*!40000 ALTER TABLE `global_level_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_level_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_method_list`
--

DROP TABLE IF EXISTS `global_method_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_method_list` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `method_text` varchar(2048) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_method_list`
--

LOCK TABLES `global_method_list` WRITE;
/*!40000 ALTER TABLE `global_method_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_method_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `harvest_temp`
--

DROP TABLE IF EXISTS `harvest_temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `harvest_temp` (
  `harvest_id` char(20) DEFAULT NULL,
  `name_last` char(255) DEFAULT NULL,
  `name_first` char(255) DEFAULT NULL,
  `email` char(255) DEFAULT NULL,
  `telephone` char(20) DEFAULT NULL,
  `timezone` char(255) DEFAULT NULL,
  `employee_no` char(10) DEFAULT NULL,
  UNIQUE KEY `harvest_id` (`harvest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `harvest_temp`
--

LOCK TABLES `harvest_temp` WRITE;
/*!40000 ALTER TABLE `harvest_temp` DISABLE KEYS */;
INSERT INTO `harvest_temp` VALUES ('4171372','Baker','Nathan','nathan.baker@stelligent.com',NULL,NULL,'2506476'),('4154013','Ndambi','Desmond','desmond.ndambi@stelligent.com',NULL,NULL,'2507552'),('4058886','Cox','Zachery','zachery.cox@stelligent.com',NULL,NULL,'2487025'),('4058884','Whitehead','Daniel','daniel.whitehead@stelligent.com',NULL,NULL,'2486435'),('4050364','Adeniji','Kenny','kehinde.adeniji@stelligent.com',NULL,NULL,'2487551'),('4047483','Kembi','Adekunle','adekunle.kembi@stelligent.com',NULL,NULL,'2487646'),('4038654','Provencher','Stephen','stephen.provencher@stelligent.com',NULL,NULL,'2485145'),('4038652','Job','Zachary','zachary.job@stelligent.com',NULL,NULL,'2483888'),('4031912','Onor','Paschal','paschal.onor@stelligent.com',NULL,NULL,'2483917'),('4031910','Click','James','ryan.click@stelligent.com',NULL,NULL,'2484206'),('4022926','Marentis','Andrew','andrew.marentis@stelligent.com',NULL,NULL,'2483428'),('3993237','Ufondu','Uzo','uzodinma.ufondu@stelligent.com',NULL,NULL,'2476507'),('3985379','Redden','Jeremiah','jeremiah.redden@stelligent.com',NULL,NULL,'2477386'),('3985375','Jia','Irene','zhuoyan.jia@stelligent.com',NULL,NULL,'2477018'),('3978077','Matos','Joao','joao.matos@stelligent.com',NULL,NULL,'2476647'),('3975065','Harper','Onyebuchi','onyebuchi.harper@stelligent.com',NULL,NULL,'2473963'),('3965028','Deng','Goldeng','goldeng.deng@stelligent.com',NULL,NULL,'2473939'),('3963118','Kwiatkowski','Jakub','jakub.kwiatkowski@stelligent.com',NULL,NULL,'2474245'),('3954712','Pucynski','Karol','karol.pucynski@stelligent.com',NULL,NULL,'2468121'),('3954477','Little','Paul','paul.little@stelligent.com',NULL,NULL,'2471506'),('3926385','Lewon','Ryan','ryan.lewon@stelligent.com',NULL,NULL,'2467901'),('3926383','Thompson','Troy','troy.thompson@stelligent.com',NULL,NULL,'2467907'),('3926381','McElreath','Mike','michael.mcelreath@stelligent.com',NULL,NULL,'2467909'),('3918921','Brunck','Paul','paul.brunck@stelligent.com',NULL,NULL,'2466472'),('3918919','Mosher','Bennie','benjamin.mosher@stelligent.com',NULL,NULL,'2466482'),('3910202','Barros','James','james.barros@stelligent.com',NULL,NULL,'2465059'),('3900178','Stockton','Daniel','daniel.stockton@stelligent.com',NULL,NULL,'251497'),('3873538','O\'Gorman','Garrett','garrett.ogorman@stelligent.com',NULL,NULL,'2460927'),('3862541','McGrady','Joel','joel.mcgrady@stelligent.com',NULL,NULL,'2458212'),('3862540','Bochenek','Ryan','ryan.bochenek@stelligent.com',NULL,NULL,'2458350'),('3847508','Morgan','Matthew','matthew.morgan@stelligent.com',NULL,NULL,'2456025'),('3835662','Ji','Brian','brian.ji@stelligent.com',NULL,NULL,'2454914'),('3829751','Awe','Ayodeji','ayodeji.awe@stelligent.com',NULL,NULL,'2452620'),('3826454','Silver','Richard','richard.silver@stelligent.com',NULL,NULL,'2450740'),('3817796','Bryant','Derrick','derrick.bryant@stelligent.com',NULL,NULL,'2445101'),('3805837','Shenk','Kyle','kyle.shenk@stelligent.com',NULL,NULL,'2445860'),('3805833','Hunter','John','john.hunter@stelligent.com',NULL,NULL,'2447504'),('3792851','Piaggio','Pablo','pablo.piaggio@stelligent.com',NULL,NULL,'2444655'),('3792850','Anbuselvam','Ajaymehul','ajaymehul.anbuselvam@stelligent.com',NULL,NULL,'2445400'),('3792849','Garrido','Jory','jory.garrido@stelligent.com',NULL,NULL,'2444659'),('3792846','Cessnun','Casey','casey.cessnun@stelligent.com',NULL,NULL,'2446058'),('3774046','Garcia','Brandon','brandon.garcia@stelligent.com',NULL,NULL,'2440892'),('3749838','Holmes','Matthew','matthew.holmes@stelligent.com',NULL,NULL,'2438758'),('3749836','Falzone','Mariana','mariana.falzone@stelligent.com',NULL,NULL,'2438760'),('3749833','Harber','Barrett','barrett.harber@stelligent.com',NULL,NULL,'2437060'),('3721661','Haughie','Ely Erin','ely.haughie@stelligent.com',NULL,NULL,'2434042'),('3706682','Chatterton','Nell','nell.chatterton@stelligent.com',NULL,NULL,'2359969'),('3658006','Kavuru','Raja','raja.kavuru@stelligent.com',NULL,NULL,'2423831'),('3647060','Bekenov','Nathan','nathan.bekenov@stelligent.com',NULL,NULL,'2421331'),('3636775','Mitchell','John','john.mitchell@stelligent.com',NULL,NULL,'2421322'),('3636773','Dix','Josh','joshua.dix@stelligent.com',NULL,NULL,'2421340'),('3625442','Bronosky','Bruno','richard.bronosky@stelligent.com',NULL,NULL,'2419907'),('3625390','Kelley','Thomas','thomas.kelley@stelligent.com',NULL,NULL,'2419898'),('3597900','Rogers','Conor','conor.rogers@stelligent.com',NULL,NULL,'2417943'),('3547922','Bah Bioh','Desire','desire.bahbioh@stelligent.com',NULL,NULL,'2413293'),('3536385','Davis','Jason','jason.davis@stelligent.com',NULL,NULL,'2412086'),('3506224','Tathineni','Pradeep','pradeep.tathineni@stelligent.com',NULL,NULL,'2409297'),('3432393','Elkhateeb','Sam','sohaib.elkhateeb@stelligent.com',NULL,NULL,'2405832'),('3171419','Automation','Delivery','delivery-automation@stelligent.com',NULL,NULL,'service-ac'),('3171143','Reddy','Ramchandra','ramchandra.reddy@stelligent.com',NULL,NULL,'team-mike-'),('3100107','Gallagher','Patrick','patrick.gallagher@stelligent.com',NULL,NULL,'2380404'),('3088321','Ybarra','Darren','darren.ybarra@stelligent.com',NULL,NULL,'2379998'),('3053741','Williams','Xavier','xavier.williams@stelligent.com',NULL,NULL,'2377410'),('3020728','Nixon','Scott','scott.nixon@stelligent.com',NULL,NULL,'2375052'),('3005858','Lin','Hank (Yonghang)','hank.lin@stelligent.com',NULL,NULL,'2373116'),('2996804','Barbour','Mike','michael.barbour@stelligent.com',NULL,NULL,'2373670'),('2996800','Nathan','Paul','paul.nathan@stelligent.com',NULL,NULL,'2373669'),('2996795','Schwarzenau','Frank','frank.schwarzenau@stelligent.com',NULL,NULL,'2191982'),('2991360','Madhavan','Anoop','anoop.madhavan@stelligent.com',NULL,NULL,'2373416'),('2978886','Jaeger','Christopher','chris.jaeger@stelligent.com',NULL,NULL,'2373021'),('2977502','AC','Jagadeesh','jagadeesh.ac@stelligent.com',NULL,NULL,'2110389'),('2974684','Whiskey','Candice','candice.whiskey@stelligent.com',NULL,NULL,'2373020'),('2974677','Flannery','John','john.flannery@stelligent.com',NULL,NULL,'2372756'),('2967296','Millner','Trevor','trevor.millner@stelligent.com',NULL,NULL,'2372477'),('2959658','Rodriguez','Josue','josue.rodriguez@stelligent.com',NULL,NULL,'2372089'),('2948434','Cooke','Steven','steven.cooke@stelligent.com',NULL,NULL,'2371891'),('2942567','Rich','Addie','addie.rich@stelligent.com',NULL,NULL,'2371572'),('2942549','Rascher','William','william.rascher@stelligent.com',NULL,NULL,'2371451'),('2942541','Smith','Gabriel','gabriel.smith@stelligent.com',NULL,NULL,'2371491'),('2942525','Todorof','Miles','miles.todorof@stelligent.com',NULL,NULL,'2371489');
/*!40000 ALTER TABLE `harvest_temp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_aws_services`
--

DROP TABLE IF EXISTS `survey_list_aws_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_aws_services` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_aws_services`
--

LOCK TABLES `survey_list_aws_services` WRITE;
/*!40000 ALTER TABLE `survey_list_aws_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_aws_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_dataops_expertise`
--

DROP TABLE IF EXISTS `survey_list_dataops_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_dataops_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_dataops_expertise`
--

LOCK TABLES `survey_list_dataops_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_dataops_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_dataops_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_dev_language_expertise`
--

DROP TABLE IF EXISTS `survey_list_dev_language_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_dev_language_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_dev_language_expertise`
--

LOCK TABLES `survey_list_dev_language_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_dev_language_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_dev_language_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_dev_tools_expertise`
--

DROP TABLE IF EXISTS `survey_list_dev_tools_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_dev_tools_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_dev_tools_expertise`
--

LOCK TABLES `survey_list_dev_tools_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_dev_tools_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_dev_tools_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_devops_expertise`
--

DROP TABLE IF EXISTS `survey_list_devops_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_devops_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_devops_expertise`
--

LOCK TABLES `survey_list_devops_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_devops_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_devops_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_devsecops_expertise`
--

DROP TABLE IF EXISTS `survey_list_devsecops_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_devsecops_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_devsecops_expertise`
--

LOCK TABLES `survey_list_devsecops_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_devsecops_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_devsecops_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_list_mlops_expertise`
--

DROP TABLE IF EXISTS `survey_list_mlops_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_list_mlops_expertise` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(255) DEFAULT NULL,
  `method_date` datetime DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_list_mlops_expertise`
--

LOCK TABLES `survey_list_mlops_expertise` WRITE;
/*!40000 ALTER TABLE `survey_list_mlops_expertise` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_list_mlops_expertise` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-05  7:33:42
