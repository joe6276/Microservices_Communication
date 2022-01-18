CREATE TABLE `comments`.`comment` (
  `id` VARCHAR(100) NOT NULL,
  `content` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)