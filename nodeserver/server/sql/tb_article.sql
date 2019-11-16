CREATE TABLE `tb_article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL DEFAULT '',
  `type` int(11) NOT NULL DEFAULT '1',
  `tags` varchar(45) NOT NULL DEFAULT '',
  `pub_time` date NOT NULL,
  `introduce` varchar(255) NOT NULL DEFAULT '',
  `content` longtext NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `edit_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;