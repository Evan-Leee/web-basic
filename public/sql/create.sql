CREATE DATABASE IF NOT EXISTS TWWebBasic DEFAULT CHARACTER SET utf8;

USE TWWebBasic;


CREATE TABLE IF NOT EXISTS question (
  description VARCHAR(40),
  type VARCHAR(15),
  score INT,
  name CHAR(6) NOT NULL PRIMARY KEY ,
  stdAnswer VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS items (
   item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name CHAR(6),
   opt CHAR(4),
   val VARCHAR(40),
   FOREIGN KEY (name) REFERENCES question(name) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO question VALUES ('UML的中文全称是','fill-in',10,'1-1','统一建模语言'),
('对象最突出的特征是','fill-in',10,'1-2','封装性-继承性-多态性'),
('UML 与软件工程的关系是','choice',10,'2-1','B'),
('Java 语言支持','choice',10,'2-2','A'),
('用例的粒度分为以下哪三种','multi',10,'3-1','A-B-D'),
('类图由以下哪三部分组成','multi',10,'3-2','A-B-C'),
('用例图只是用于和客户交流和沟通的,用于确定需求。','judge',10,'4-1','false'),
('在状态图中,终止状态在一个状态图中允许有任意多个。','judge',10,'4-2','true'),
('简述什么是模型以及模型的表现形式?','shortAnswer',10,'5-1',
'模型是对所研究的系统、过程、事物或概念的一种表达形式。');

INSERT INTO items VALUES
(NULL,'1-1','1',NULL),
(NULL,'1-2','3',NULL),
(NULL,'2-1','A',' UML 就是软件工程'),
(NULL,'2-1','B',' UML 参与到软件工程中软件开发过程的几个阶段'),
(NULL,'2-1','C',' UML 与软件工程无关'),
(NULL,'2-1','D',' UML 是软件工程的一部分'),
(NULL,'2-2','A',' 单继承'),
(NULL,'2-2','B',' 多继承'),
(NULL,'2-2','C',' 单继承和多继承都支持'),
(NULL,'2-2','D',' 单继承和多继承都不支持'),
(NULL,'3-1','A',' 概述级'),
(NULL,'3-1','B',' 需求级'),
(NULL,'3-1','C',' 用户目标级'),
(NULL,'3-1','D',' 子功能级'),
(NULL,'3-2','A',' 名称(Name)'),
(NULL,'3-2','B',' 属性(Attribute)'),
(NULL,'3-2','C',' 操作(Operation)'),
(NULL,'3-2','D',' 方法(Function)'),
(NULL,'4-1',NULL,NULL),
(NULL,'4-2',NULL,NULL),
(NULL,'5-1',NULL,NULL);


