-- CreateTable
CREATE TABLE `todos` (
    `uuid` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NOT NULL DEFAULT 0,
    `titre` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `priorite` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `isDone` BOOLEAN NOT NULL DEFAULT false,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(50) NULL,
    `firstname` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `password` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `todos` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
