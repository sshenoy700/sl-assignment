-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 19, 2018 at 04:50 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slassignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(20) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` bigint(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `notes` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `age`, `gender`, `email`, `phone`, `address`, `notes`) VALUES
(1, 'Sam', 25, 'female', 'pam@and.com', 9655874526, 'Main road, Bangalore', 'Notes as usual'),
(2, 'gray', 10, 'Male', 'gray@gray.com', 7833920182, 'Full address', 'These are the new notes'),
(5, 'Suraj Shenoy', 10, 'Male', 'sshenoy70@yahoo.com', 222222222, 'No:3787, Ground Floor, 13th main, 8th cross rd HAL 2nd stage\nIndiranagar', 'asd'),
(6, 'Ivor Bentley', 18, 'Female', 'debu@mailinator.com', 80, 'Eiusmod illum quia libero eu nisi', 'Ab sit veritatis qui qui non vitae dolorem ut consequatur et porro tempora deleniti rerum ut'),
(7, 'Chase Mccormick', 83, '', 'heva@mailinator.com', 96, 'Proident mollit aut voluptate voluptatum labore aute nisi eaque', 'Et perferendis necessitatibus totam nisi minus');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
