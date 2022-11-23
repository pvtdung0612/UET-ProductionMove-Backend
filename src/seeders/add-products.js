"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        name: "Laptop Dell XPS 13 Plus 9320 i7 1260P/16GB/512GB/Touch/Cap/OfficeHS/Win11 (5CG56)",
        bornDate: new Date(),
        factoryID: 1,
        hereRole: "R5",
        hereID: 1,
        productLine: "XPS",
        price: "59.490.000₫",
        cpu: "i71260P2.1GHz",
        screen: '13.4"3.5K (3456 x 2160) - OLED',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/292640/dell-xps-13-plus-9320-i7-5cg56-2.jpg",
        description: "Dài 295.3 mm - Rộng 199 mm - Dày 15.28 mm - Nặng 1.26 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2
      {
        name: "Laptop Dell XPS 13 9320 i5 1240P/16GB/512GB/Touch/Cáp/OfficeHS/Win11 (70295789)",
        bornDate: new Date(),
        factoryID: 1,
        hereRole: "R3",
        hereID: 1,
        productLine: "XPS",
        price: "46.590.000₫",
        cpu: "i71260P2.1GHz",
        screen: '13.4"3.5K (3456 x 2160) - OLED',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/292594/dell-xps-13-9320-i5-70295789-1.jpg",
        description: "Dài 295.3 mm - Rộng 199 mm - Dày 15.28 mm - Nặng 1.26 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3
      {
        name: "Laptop Dell XPS 13 9310 i5 1135G7/8GB/512GB/Cáp/Office H&S/Win11 (70273578)",
        bornDate: new Date(),
        factoryID: 1,
        hereRole: "R2",
        hereID: 1,
        productLine: "XPS",
        price: "39.990.000₫",
        cpu: "i51135G72.4GHz",
        screen: '13.4"Full HD+ (1920 x 1200)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/269554/Kit/dell-xps-13-9310-i5-70273578-note.jpg",
        description: "Dài 295 mm - Rộng 198 mm - Dày 14.8 mm - Nặng 1.2 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4
      {
        name: "Laptop Dell Gaming Alienware m15 R6 i7 11800H/32GB/1TB SSD/8GB RTX3070/240Hz/OfficeHS/Win11 (70272633)",
        bornDate: new Date(),
        factoryID: 1,
        hereRole: "R3",
        hereID: 1,
        productLine: "Alienware",
        cpu: "i711800H2.30 GHz",
        price: "61.640.000₫",
        screen: '15.6"QHD (2560 x 1440)240Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/271090/Slider/dell-gaming-alienware-m15-r6-i7-70272633-fix-01-1020x570.jpg",
        description: "Dài 356 mm - Rộng 272 mm - Dày 19 mm - Nặng 2.69 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 5
      {
        name: "Laptop Dell Gaming Alienware m15 R6 i7 11800H/32GB/1TB SSD/6GB RTX3060/165Hz/Office H&S/Win11 (P109F001DBL)",
        bornDate: new Date(),
        factoryID: 1,
        hereRole: "R2",
        hereID: 1,
        productLine: "Alienware",
        price: "61.490.000₫",
        cpu: "i711800H2.30 GHz",
        screen: '15.6"Full HD (1920 x 1080) 165Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/271545/Kit/dell-gaming-alienware-m15-r6-i7-p109f001dbl-n.jpg",
        description:
          "Dài 356.2 mm - Rộng 272.5 mm - Dày 19.2 mm - Nặng 2.69 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 6
      {
        name: "Laptop Dell Gaming G15 5515 R5 5600H/16GB/512GB/4GB RTX3050/120Hz/OfficeHS/Win11 (P105F004DGR)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R3",
        hereID: 2,
        productLine: "Gaming G-series",
        price: "23.090.000₫",
        cpu: "Ryzen 55600H3.3GHz",
        screen: '15.6"Full HD (1920 x 1080) 120Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/260171/Slider/dell-gaming-g15-5515-r5-p105f004dgr-01-1020x570.jpg",
        description:
          "Dài 357.26 mm - Rộng 272.11 mm - Dày 26.9 mm - Nặng 2.8 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 7
      {
        name: "Laptop Dell Gaming G15 5511 i5 11400H/8GB/256GB/4GB RTX3050/120Hz/OfficeHS/Win11 (70266676)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R3",
        hereID: 2,
        productLine: "Gaming G-series",
        price: "25.490.000₫",
        cpu: "Ryzen 55600H3.3GHz",
        screen: '15.6"Full HD (1920 x 1080) 120Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/264354/Kit/dell-gaming-g15-5511-i5-70266676-notelapcopy.jpg",
        description: "Dài 357 mm - Rộng 272 mm - Dày 25 mm - Nặng 2.81 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 8
      {
        name: "Laptop Dell Gaming G15 5515 R7 5800H/8GB/512GB/4GB RTX3050/120Hz/Office H&S/Win11 (70266674)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R3",
        hereID: 2,
        productLine: "Gaming G-series",
        price: "27.910.000₫",
        cpu: "Ryzen 75800H3.2GHz",
        screen: '15.6"Full HD (1920 x 1080) 120Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/269650/Slider/dell-gaming-g15-5515-r7-70266674-01-1020x570.jpg",
        description: "Dài 357 mm - Rộng 272 mm - Dày 25 mm - Nặng 2.81 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 9
      {
        name: "Laptop Dell Gaming G15 5515 R5 5600H/8GB/256GB/4GB RTX3050/120Hz/OfficeHS/Win11 (P105F004CGR)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R3",
        hereID: 2,
        productLine: "Gaming G-series",
        price: "20.090.000₫",
        cpu: "Ryzen 55600H3.3GHz",
        screen: '15.6"Full HD (1920 x 1080) 120Hz',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/260170/Slider/dell-gaming-g15-5515-r5-p105f004cgr-01-1020x570.jpg",
        description:
          "Dài 357.26 mm - Rộng 272.11 mm - Dày 26.9 mm - Nặng 2.8 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 10
      {
        name: "Laptop Dell Inspiron 15 3511 i3 1115G4/4GB/256GB/Office H&S/Win11 (P112F001CBL)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R3",
        hereID: 2,
        productLine: "Inspiron",
        price: "12.090.000₫",
        cpu: "i31115G43GHz",
        screen: '15.6"Full HD (1920 x 1080)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/264370/Slider/vi-vn-dell-inspiron-15-3511-i3-p112f001cbl-thumbvideo.jpg",
        description: "Dài 358.5 mm - Rộng 235.5 mm - Dày 18.9 mm - Nặng 1.7 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 11
      {
        name: "Laptop Dell Inspiron 16 5620 i7 1255U/8GB/512GB/OfficeHS/Win11 (N6I7110W1)",
        bornDate: new Date(),
        factoryID: 2,
        hereRole: "R2",
        hereID: 2,
        productLine: "Inspiron",
        price: "24.690.000₫",
        cpu: "i71255U1.7GHz",
        screen: '16"Full HD+ (1920 x 1200)',
        image: "https://cdn.tgdd.vn/Products/Images/44/292396/Kit/note.jpg",
        description:
          "Dài 356.7 mm - Rộng 251.9 mm - Dày 17.95 mm - Nặng 1.87 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 12
      {
        name: "Laptop Dell Vostro 3510 i5 1135G7/8GB/512GB/2GB MX350/OfficeHS/Win11 (P112F002BBL) ",
        bornDate: new Date(),
        factoryID: 3,
        hereRole: "R3",
        hereID: 3,
        productLine: "Vostro",
        price: "19.590.000₫",
        cpu: "i51135G72.4GHz",
        screen: '15.6"Full HD (1920 x 1080)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/266280/Slider/vi-vn-dell-vostro-3510-i5-p112f002bbl-1.jpg",
        description:
          "Dài 358.5 mm - Rộng 235.5 mm - Dày 18.9 mm - Nặng 1.69 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 13
      {
        name: "Laptop Dell Vostro 5410 i5 11320H/8GB/512GB/Office H&S/Win11 (V4I5214W1)",
        bornDate: new Date(),
        factoryID: 3,
        hereRole: "R3",
        hereID: 3,
        productLine: "Vostro",
        price: "20.690.000₫",
        cpu: "i511320H3.2GHz",
        screen: '14"Full HD (1920 x 1080)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-11320h-8gb-512gb-office-h-s-600x600.jpg",
        description:
          "Dài 321.2 mm - Rộng 212.8 mm - Dày 17.9 mm - Nặng 1.44 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 14
      {
        name: "Laptop Dell Vostro 5620 i5 1240P/8GB/256GB/OfficeHS/Win11 (V6I5001W1)",
        bornDate: new Date(),
        factoryID: 3,
        hereRole: "R2",
        hereID: 3,
        productLine: "Vostro",
        price: "21.790.000₫",
        cpu: "i51240P1.7GHz",
        screen: '16"Full HD+ (1920 x 1200)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/292397/dell-vostro-5620-i5-v6i5001w1-thumb-1-600x600.jpg",
        description: "Dài 356 mm - Rộng 252 mm - Dày 18 mm - Nặng 1.97 kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 15
      {
        name: "Laptop Dell Latitude 3520 i5 1135G7/8GB/256GB/Win10 Pro (70251593)",
        bornDate: new Date(),
        factoryID: 3,
        hereRole: "R3",
        hereID: 3,
        productLine: "Latitude",
        price: "22.890.000₫",
        cpu: "i51135G72.4GHz",
        screen: '15.6"Full HD (1920 x 1080)',
        image:
          "https://cdn.tgdd.vn/Products/Images/44/249190/TimerThumb/dell-latitude-3520-i5-70251593-(16).jpg",
        description: "Dài 361 mm - Rộng 240.9 mm - Dày 18 mm - Nặng 1.79 Kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
