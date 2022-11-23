-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2022 lúc 05:58 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `uet_production_move`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roleKey` varchar(255) DEFAULT NULL,
  `workplaceID` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `roleKey`, `workplaceID`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'dung', 'dung', 'R1', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'kha', 'kha', 'R1', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'quang', 'quang', 'R1', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(4, 'dungAgent', 'dungAgent', 'R3', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(5, 'quangAgent', 'quangAgent', 'R3', 2, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(6, 'khaAgent', 'khaAgent', 'R3', 3, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(7, 'dungFactory', 'dungFactory', 'R2', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(8, 'quangFactory', 'quangFactory', 'R2', 2, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(9, 'khaFactory', 'khaFactory', 'R2', 3, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(10, 'dungInsurance', 'dungInsurance', 'R4', 1, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(11, 'quangInsurance', 'quangInsurance', 'R4', 2, '', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(12, 'khaInsurance', 'khaInsurance', 'R4', 3, '', '2022-11-23 11:43:14', '2022-11-23 11:55:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `agents`
--

INSERT INTO `agents` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Đại lý DellCorp Cầu Giấy', '32 Đ.Cầu Giấy - Cầu Giấy - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'Đại lý DellCorp Hồ Tùng Mậu', '1 Đ.Hồ Tùng Mậu - Cầu Giấy - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'Đại lý DellCorp Thanh Xuân', '260 Đ.Nguyễn Trãi - Thanh Xuân - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'N.A', '34 Đ.Cầu Giấy - Cầu Giấy - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'H.B', '5 Đ.Hồ Tùng Mậu - Cầu Giấy - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'P.C', '280 Đ.Nguyễn Trãi - Thanh Xuân - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `error_reports`
--

CREATE TABLE `error_reports` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `productID` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `error_reports`
--

INSERT INTO `error_reports` (`id`, `customerID`, `productID`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Khách hàng báo lỗi màn hình không hiển thị', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 2, 2, 'Khách hàng báo lỗi bàn phím không sử dụng được', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 3, 3, 'Khách hàng báo lỗi màn hình xanh', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `factories`
--

CREATE TABLE `factories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `factories`
--

INSERT INTO `factories` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Nhà Máy Hà Đông cơ sở 1', '1 Hà Đông - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'Nhà Máy Gia Lâm cơ sở 1', '1 Gia Lâm - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'Nhà Máy Đông Anh cơ sở 1', '1 Đông Anh - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `insurances`
--

CREATE TABLE `insurances` (
  `id` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `errorReportsID` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `insurances`
--

INSERT INTO `insurances` (`id`, `productID`, `errorReportsID`, `startDate`, `endDate`, `result`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2022-11-23 11:43:14', '2022-11-26 11:43:14', 'SUCCESS', 'sửa lỗi main hình cho khách', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 2, 2, '2022-11-23 11:43:14', '2022-11-26 11:43:14', 'SUCCESS', 'sửa lỗi bàn phím không sử dụng được', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 3, 3, '2022-11-23 11:43:14', '2022-11-26 11:43:14', 'SUCCESS', 'sửa lỗi màn hình xanh', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `insurance_centers`
--

CREATE TABLE `insurance_centers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `insurance_centers`
--

INSERT INTO `insurance_centers` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'TTBH Cầu Giấy', '1 Cầu Giấy - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'TTBH Hồ Tùng Mậu', '32 Hồ Tùng Mậu - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'TTBH Thanh Xuân', '260 Thanh Xuân - Hà Nội', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `bornDate` datetime NOT NULL,
  `factoryID` int(11) DEFAULT NULL,
  `hereRole` varchar(255) DEFAULT NULL,
  `hereID` int(11) DEFAULT NULL,
  `productLine` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `cpu` varchar(255) DEFAULT NULL,
  `screen` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `bornDate`, `factoryID`, `hereRole`, `hereID`, `productLine`, `price`, `cpu`, `screen`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Laptop Dell XPS 13 Plus 9320 i7 1260P/16GB/512GB/Touch/Cap/OfficeHS/Win11 (5CG56)', '2022-11-23 11:43:14', 1, 'R5', 1, 'XPS', '59.490.000₫', 'i71260P2.1GHz', '13.4\"3.5K (3456 x 2160) - OLED', 'https://cdn.tgdd.vn/Products/Images/44/292640/dell-xps-13-plus-9320-i7-5cg56-2.jpg', 'Dài 295.3 mm - Rộng 199 mm - Dày 15.28 mm - Nặng 1.26 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 'Laptop Dell XPS 13 9320 i5 1240P/16GB/512GB/Touch/Cáp/OfficeHS/Win11 (70295789)', '2022-11-23 11:43:14', 1, 'R3', 1, 'XPS', '46.590.000₫', 'i71260P2.1GHz', '13.4\"3.5K (3456 x 2160) - OLED', 'https://cdn.tgdd.vn/Products/Images/44/292594/dell-xps-13-9320-i5-70295789-1.jpg', 'Dài 295.3 mm - Rộng 199 mm - Dày 15.28 mm - Nặng 1.26 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(3, 'Laptop Dell XPS 13 9310 i5 1135G7/8GB/512GB/Cáp/Office H&S/Win11 (70273578)', '2022-11-23 11:43:14', 1, 'R2', 1, 'XPS', '39.990.000₫', 'i51135G72.4GHz', '13.4\"Full HD+ (1920 x 1200)', 'https://cdn.tgdd.vn/Products/Images/44/269554/Kit/dell-xps-13-9310-i5-70273578-note.jpg', 'Dài 295 mm - Rộng 198 mm - Dày 14.8 mm - Nặng 1.2 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(4, 'Laptop Dell Gaming Alienware m15 R6 i7 11800H/32GB/1TB SSD/8GB RTX3070/240Hz/OfficeHS/Win11 (70272633)', '2022-11-23 11:43:14', 1, 'R3', 1, 'Alienware', '61.640.000₫', 'i711800H2.30 GHz', '15.6\"QHD (2560 x 1440)240Hz', 'https://cdn.tgdd.vn/Products/Images/44/271090/Slider/dell-gaming-alienware-m15-r6-i7-70272633-fix-01-1020x570.jpg', 'Dài 356 mm - Rộng 272 mm - Dày 19 mm - Nặng 2.69 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(5, 'Laptop Dell Gaming Alienware m15 R6 i7 11800H/32GB/1TB SSD/6GB RTX3060/165Hz/Office H&S/Win11 (P109F001DBL)', '2022-11-23 11:43:14', 1, 'R2', 1, 'Alienware', '61.490.000₫', 'i711800H2.30 GHz', '15.6\"Full HD (1920 x 1080) 165Hz', 'https://cdn.tgdd.vn/Products/Images/44/271545/Kit/dell-gaming-alienware-m15-r6-i7-p109f001dbl-n.jpg', 'Dài 356.2 mm - Rộng 272.5 mm - Dày 19.2 mm - Nặng 2.69 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(6, 'Laptop Dell Gaming G15 5515 R5 5600H/16GB/512GB/4GB RTX3050/120Hz/OfficeHS/Win11 (P105F004DGR)', '2022-11-23 11:43:14', 2, 'R3', 2, 'Gaming G-series', '23.090.000₫', 'Ryzen 55600H3.3GHz', '15.6\"Full HD (1920 x 1080) 120Hz', 'https://cdn.tgdd.vn/Products/Images/44/260171/Slider/dell-gaming-g15-5515-r5-p105f004dgr-01-1020x570.jpg', 'Dài 357.26 mm - Rộng 272.11 mm - Dày 26.9 mm - Nặng 2.8 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(7, 'Laptop Dell Gaming G15 5511 i5 11400H/8GB/256GB/4GB RTX3050/120Hz/OfficeHS/Win11 (70266676)', '2022-11-23 11:43:14', 2, 'R3', 2, 'Gaming G-series', '25.490.000₫', 'Ryzen 55600H3.3GHz', '15.6\"Full HD (1920 x 1080) 120Hz', 'https://cdn.tgdd.vn/Products/Images/44/264354/Kit/dell-gaming-g15-5511-i5-70266676-notelapcopy.jpg', 'Dài 357 mm - Rộng 272 mm - Dày 25 mm - Nặng 2.81 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(8, 'Laptop Dell Gaming G15 5515 R7 5800H/8GB/512GB/4GB RTX3050/120Hz/Office H&S/Win11 (70266674)', '2022-11-23 11:43:14', 2, 'R3', 2, 'Gaming G-series', '27.910.000₫', 'Ryzen 75800H3.2GHz', '15.6\"Full HD (1920 x 1080) 120Hz', 'https://cdn.tgdd.vn/Products/Images/44/269650/Slider/dell-gaming-g15-5515-r7-70266674-01-1020x570.jpg', 'Dài 357 mm - Rộng 272 mm - Dày 25 mm - Nặng 2.81 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(9, 'Laptop Dell Gaming G15 5515 R5 5600H/8GB/256GB/4GB RTX3050/120Hz/OfficeHS/Win11 (P105F004CGR)', '2022-11-23 11:43:14', 2, 'R3', 2, 'Gaming G-series', '20.090.000₫', 'Ryzen 55600H3.3GHz', '15.6\"Full HD (1920 x 1080) 120Hz', 'https://cdn.tgdd.vn/Products/Images/44/260170/Slider/dell-gaming-g15-5515-r5-p105f004cgr-01-1020x570.jpg', 'Dài 357.26 mm - Rộng 272.11 mm - Dày 26.9 mm - Nặng 2.8 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(10, 'Laptop Dell Inspiron 15 3511 i3 1115G4/4GB/256GB/Office H&S/Win11 (P112F001CBL)', '2022-11-23 11:43:14', 2, 'R3', 2, 'Inspiron', '12.090.000₫', 'i31115G43GHz', '15.6\"Full HD (1920 x 1080)', 'https://cdn.tgdd.vn/Products/Images/44/264370/Slider/vi-vn-dell-inspiron-15-3511-i3-p112f001cbl-thumbvideo.jpg', 'Dài 358.5 mm - Rộng 235.5 mm - Dày 18.9 mm - Nặng 1.7 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(11, 'Laptop Dell Inspiron 16 5620 i7 1255U/8GB/512GB/OfficeHS/Win11 (N6I7110W1)', '2022-11-23 11:43:14', 2, 'R2', 2, 'Inspiron', '24.690.000₫', 'i71255U1.7GHz', '16\"Full HD+ (1920 x 1200)', 'https://cdn.tgdd.vn/Products/Images/44/292396/Kit/note.jpg', 'Dài 356.7 mm - Rộng 251.9 mm - Dày 17.95 mm - Nặng 1.87 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(12, 'Laptop Dell Vostro 3510 i5 1135G7/8GB/512GB/2GB MX350/OfficeHS/Win11 (P112F002BBL) ', '2022-11-23 11:43:14', 3, 'R3', 3, 'Vostro', '19.590.000₫', 'i51135G72.4GHz', '15.6\"Full HD (1920 x 1080)', 'https://cdn.tgdd.vn/Products/Images/44/266280/Slider/vi-vn-dell-vostro-3510-i5-p112f002bbl-1.jpg', 'Dài 358.5 mm - Rộng 235.5 mm - Dày 18.9 mm - Nặng 1.69 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(13, 'Laptop Dell Vostro 5410 i5 11320H/8GB/512GB/Office H&S/Win11 (V4I5214W1)', '2022-11-23 11:43:14', 3, 'R3', 3, 'Vostro', '20.690.000₫', 'i511320H3.2GHz', '14\"Full HD (1920 x 1080)', 'https://cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-11320h-8gb-512gb-office-h-s-600x600.jpg', 'Dài 321.2 mm - Rộng 212.8 mm - Dày 17.9 mm - Nặng 1.44 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(14, 'Laptop Dell Vostro 5620 i5 1240P/8GB/256GB/OfficeHS/Win11 (V6I5001W1)', '2022-11-23 11:43:14', 3, 'R2', 3, 'Vostro', '21.790.000₫', 'i51240P1.7GHz', '16\"Full HD+ (1920 x 1200)', 'https://cdn.tgdd.vn/Products/Images/44/292397/dell-vostro-5620-i5-v6i5001w1-thumb-1-600x600.jpg', 'Dài 356 mm - Rộng 252 mm - Dày 18 mm - Nặng 1.97 kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(15, 'Laptop Dell Latitude 3520 i5 1135G7/8GB/256GB/Win10 Pro (70251593)', '2022-11-23 11:43:14', 3, 'R3', 3, 'Latitude', '22.890.000₫', 'i51135G72.4GHz', '15.6\"Full HD (1920 x 1080)', 'https://cdn.tgdd.vn/Products/Images/44/249190/TimerThumb/dell-latitude-3520-i5-70251593-(16).jpg', 'Dài 361 mm - Rộng 240.9 mm - Dày 18 mm - Nặng 1.79 Kg', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sells`
--

CREATE TABLE `sells` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `productID` int(11) DEFAULT NULL,
  `sellDate` datetime DEFAULT NULL,
  `agentID` int(11) DEFAULT NULL,
  `insuranceTermEndDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sells`
--

INSERT INTO `sells` (`id`, `customerID`, `productID`, `sellDate`, `agentID`, `insuranceTermEndDate`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2022-11-20 07:00:00', 1, '2023-05-20 00:00:00', '2022-11-23 11:43:14', '2022-11-23 11:43:14'),
(2, 2, 10, '2022-11-15 07:00:00', 2, '2023-05-15 00:00:00', '2022-11-23 11:43:14', '2022-11-23 11:43:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-accounts.js'),
('create-agents.js'),
('create-customers.js'),
('create-error_reports.js'),
('create-factories.js'),
('create-insurance_centers.js'),
('create-insurances.js'),
('create-products.js'),
('create-sells.js');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `error_reports`
--
ALTER TABLE `error_reports`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `factories`
--
ALTER TABLE `factories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `insurances`
--
ALTER TABLE `insurances`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `insurance_centers`
--
ALTER TABLE `insurance_centers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sells`
--
ALTER TABLE `sells`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `error_reports`
--
ALTER TABLE `error_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `factories`
--
ALTER TABLE `factories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `insurances`
--
ALTER TABLE `insurances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `insurance_centers`
--
ALTER TABLE `insurance_centers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
