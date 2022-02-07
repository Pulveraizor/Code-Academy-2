-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.5-MariaDB-1:10.6.5+maria~focal - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for CodeAcademy
DROP DATABASE IF EXISTS `CodeAcademy`;
CREATE DATABASE IF NOT EXISTS `CodeAcademy` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `CodeAcademy`;

-- Dumping structure for table CodeAcademy.books
DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `isbn` bigint(20) NOT NULL DEFAULT 0,
  `genre` varchar(50) NOT NULL DEFAULT 'Not specified',
  `author` varchar(191) NOT NULL DEFAULT 'Not specified',
  `title` varchar(191) NOT NULL DEFAULT 'Not specified',
  `year` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table CodeAcademy.books: ~9 rows (approximately)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`id`, `isbn`, `genre`, `author`, `title`, `year`) VALUES
	(1, 9780140430547, 'Historical Literature', 'Charles Dickens', 'A Tale of Two Cities', 1859),
	(2, 9780044403371, '	Fantasy', 'J. R. R. Tolkien', 'The Hobbit', 1937),
	(3, 9780590353403, 'Fantasy', 'J. K. Rowling', 'Harry Potter and the Philosopher\'s Stone', 1997),
	(4, 9780547260693, 'Novella', 'Antoine de Saint-Exupéry', 'The Little Prince', 1943),
	(5, 9780141182704, 'Novella', 'George Orwell', 'Animal Farm', 1945);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
