-- --------------------------------------------------------
-- Hôte:                         localhost
-- Version du serveur:           10.6.4-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage des données de la table securite_todolist.todos : ~0 rows (environ)
DELETE FROM `todos`;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` (`uuid`, `user_id`, `titre`, `description`, `priorite`, `date`, `isDone`) VALUES
	('1bbe5d18-a46d-44c4-a55e-c1303c9b64db', 1, 'Aller promener le chien du voisin', 'M. Durand est en vacances, il faut y aller entre 19h et 20h', 2, '2022-05-09', 0),
	('417e0771-96c7-44c5-8ca8-b420920313e6', 1, 'Faire le plein d\'essence', 'Utiliser l\'indemnité inflation de 100€', 3, '2022-05-14', 0),
	('e04fb88a-3601-402f-b522-68b8eda94dea', 1, 'Emmener les poubelles', 'Poubelle jaune le mardi et grise le vendredi', 0, '2022-05-08', 0);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;

-- Listage des données de la table securite_todolist.user : ~1 rows (environ)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `lastname`, `firstname`, `email`, `password`) VALUES
	(1, 'Dupond', 'Jacques', 'monemail@gmail.com', 'chaussuredu42'),
	(3, 'Marchal', 'Léo', 'leomarchal@gmail.com', 'onetwothree');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
