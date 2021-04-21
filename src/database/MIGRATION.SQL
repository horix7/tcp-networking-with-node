
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `rooms` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `madeby` VARCHAR(255) NOT NULL,
    `key` VARCHAR(255),
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;



DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `rooms`;

