/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `admin_center` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `chef_rayon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL,
  `id_admin_center` int DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `rayon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_admin_center` (`id_admin_center`),
  CONSTRAINT `chef_rayon_ibfk_1` FOREIGN KEY (`id_admin_center`) REFERENCES `admin_center` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `id_rayon` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rayon` (`id_rayon`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_rayon`) REFERENCES `rayons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `promotions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `promotion` varchar(100) DEFAULT NULL,
  `id_chef_rayon` int DEFAULT NULL,
  `id_produit` int DEFAULT NULL,
  `date_promotion` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'false',
  PRIMARY KEY (`id`),
  KEY `id_chef_rayon` (`id_chef_rayon`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`id_chef_rayon`) REFERENCES `chef_rayon` (`id`),
  CONSTRAINT `promotions_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rayons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `id_chef_rayon` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admin` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'HHHHH', 'undefined', 'red@gmail.com', 'undefined');
INSERT INTO `admin` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(4, 'HHHHH', 'redoneww', 'user.email', 'user.phone');
INSERT INTO `admin` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(5, 'HHHHH', 'redoneww', 'user.email', 'user.phone');
INSERT INTO `admin` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(6, 'yep cock', 'redoneww', 'user.email', 'user.phone'),
(7, 'yep coeeeeck', 'redoneww', 'emaildddd@gmail.com', 'password');

INSERT INTO `admin_center` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'chef_center', 'redone', 'red@gmail.com', '1234');


INSERT INTO `chef_rayon` (`id`, `firstName`, `lastName`, `email`, `pays`, `id_admin_center`, `password`, `rayon`) VALUES
(1, 'chef_rayon', 'redone ', 'chef@gmail.com', '2332', 1, '1234', 'electronique');


INSERT INTO `products` (`id`, `nom`, `id_rayon`, `quantity`, `price`) VALUES
(1, 'clavier', 1, 12, '50');


INSERT INTO `promotions` (`id`, `promotion`, `id_chef_rayon`, `id_produit`, `date_promotion`, `status`) VALUES
(2, '5020%', 1, 1, '21-01-2022', 'false');
INSERT INTO `promotions` (`id`, `promotion`, `id_chef_rayon`, `id_produit`, `date_promotion`, `status`) VALUES
(3, '5%', 1, 1, '21-01-2022', 'false');
INSERT INTO `promotions` (`id`, `promotion`, `id_chef_rayon`, `id_produit`, `date_promotion`, `status`) VALUES
(4, '5020%', 1, 1, '21-01-2022', 'false');
INSERT INTO `promotions` (`id`, `promotion`, `id_chef_rayon`, `id_produit`, `date_promotion`, `status`) VALUES
(5, NULL, 1, 1, '21-01-2022', 'false'),
(6, NULL, 1, 1, '21-01-2022', 'false');

INSERT INTO `rayons` (`id`, `nom`, `id_chef_rayon`) VALUES
(1, 'electronique', 1);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;