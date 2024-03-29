const permitRequests = [
    {
      id: 1,
      content: "Quảng cáo sản phẩm nông nghiệp",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Bị từ chối",
      CompanyId: 1,
      BoardId: 1,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 2,
      content: "Quảng cáo nước giải khát",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 2,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 3,
      content: "Quảng cáo máy tính",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 3,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 4,
      content: "Quảng cáo máy tính",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 4,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 5,
      content: "Quảng cáo sản phẩm công nghiệp",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 5,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 6,
      content: "Quảng cáo đồ gia dụng",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-11 00:00:00",
      end: "2024-11-11 00:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 6,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 7,
      content: "Quảng cáo đồ điện tử",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-11-13 10:00:00",
      end: "2024-11-13 20:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 7,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 8,
      content: "Quảng cáo thực phẩm sạch",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-11-14 12:00:00",
      end: "2024-11-14 22:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 8,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 9,
      content: "Quảng cáo thời trang",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-11-15 14:30:00",
      end: "2024-11-15 23:00:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 9,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 10,
      content: "Quảng cáo dịch vụ du lịch",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-11-16 16:00:00",
      end: "2024-11-16 01:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 10,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 11,
      content: "Quảng cáo đồ chơi trẻ em",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-17 18:30:00",
      end: "2024-11-17 03:00:00",
      status: "Chưa cấp phép",
      CompanyId: 2,
      BoardId: 11,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 12,
      content: "Quảng cáo xe máy mới",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-11-18 20:00:00",
      end: "2024-11-18 04:30:00",
      status: "Bị từ chối",
      CompanyId: 5,
      BoardId: 12,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 13,
      content: "Quảng cáo thực phẩm hữu cơ",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-11-19 22:30:00",
      end: "2024-11-19 06:00:00",
      status: "Đã cấp phép",
      CompanyId: 1,
      BoardId: 13,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 14,
      content: "Quảng cáo sách mới",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-11-20 01:00:00",
      end: "2024-11-20 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 14,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 15,
      content: "Quảng cáo điện thoại di động",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-11-21 03:30:00",
      end: "2024-11-21 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 15,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 16,
      content: "Quảng cáo đồ gia dụng khác",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-11-22 10:30:00",
      end: "2024-11-22 20:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 16,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 17,
      content: "Quảng cáo đồ điện tử mới",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-11-23 12:00:00",
      end: "2024-11-23 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 17,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 18,
      content: "Quảng cáo thực phẩm sạch và organic",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-11-24 14:30:00",
      end: "2024-11-24 23:00:00",
      status: "Đã cấp phép",
      CompanyId: 1,
      BoardId: 18,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 19,
      content: "Quảng cáo thời trang mùa đông",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-11-25 16:00:00",
      end: "2024-11-25 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 19,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 20,
      content: "Quảng cáo dịch vụ du lịch hè 2024",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-11-26 18:30:00",
      end: "2024-11-26 03:00:00",
      status: "Đã cấp phép",
      CompanyId: 2,
      BoardId: 20,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 21,
      content: "Quảng cáo đồ chơi cho bé yêu",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-11-27 20:00:00",
      end: "2024-11-27 04:30:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 21,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 22,
      content: "Quảng cáo xe máy và phụ kiện",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-11-28 22:30:00",
      end: "2024-11-28 06:00:00",
      status: "Bị từ chối",
      CompanyId: 5,
      BoardId: 22,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 23,
      content: "Quảng cáo thực phẩm hữu cơ mới",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-11-29 01:00:00",
      end: "2024-11-29 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 23,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 24,
      content: "Quảng cáo sách mới nhất",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-11-30 03:30:00",
      end: "2024-11-30 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 24,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 25,
      content: "Quảng cáo điện thoại di động cao cấp",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-12-01 10:30:00",
      end: "2024-12-01 20:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 25,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 26,
      content: "Quảng cáo đồ gia dụng hiện đại",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-12-02 12:00:00",
      end: "2024-12-02 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 26,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 27,
      content: "Quảng cáo đồ điện tử công nghệ mới",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-12-03 14:30:00",
      end: "2024-12-03 23:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 27,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 28,
      content: "Quảng cáo thực phẩm sạch và chất lượng",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-12-04 16:00:00",
      end: "2024-12-04 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 28,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 29,
      content: "Quảng cáo thời trang mùa xuân",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-12-05 18:30:00",
      end: "2024-12-05 03:00:00",
      status: "Bị từ chối",
      CompanyId: 4,
      BoardId: 29,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 30,
      content: "Quảng cáo dịch vụ du lịch hạ long",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-12-06 20:00:00",
      end: "2024-12-06 04:30:00",
      status: "Đã cấp phép",
      CompanyId: 2,
      BoardId: 30,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 31,
      content: "Quảng cáo đồ chơi giáo dục cho trẻ em",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-12-07 22:30:00",
      end: "2024-12-07 06:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 31,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 32,
      content: "Quảng cáo xe máy mới nhất",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-12-08 01:00:00",
      end: "2024-12-08 08:30:00",
      status: "Đã cấp phép",
      CompanyId: 5,
      BoardId: 32,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 33,
      content: "Quảng cáo thực phẩm hữu cơ cao cấp",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-12-09 03:30:00",
      end: "2024-12-09 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 33,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 34,
      content: "Quảng cáo sách giáo trình mới",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-12-10 10:30:00",
      end: "2024-12-10 20:00:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 34,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 35,
      content: "Quảng cáo điện thoại di động hiệu suất cao",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-12-11 12:00:00",
      end: "2024-12-11 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 35,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 36,
      content: "Quảng cáo đồ gia dụng thông minh",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-12-12 14:30:00",
      end: "2024-12-12 23:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 36,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 37,
      content: "Quảng cáo đồ điện tử tiện ích",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-12-13 16:00:00",
      end: "2024-12-13 01:30:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 37,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 38,
      content: "Quảng cáo thực phẩm sạch cao cấp",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-12-14 18:30:00",
      end: "2024-12-14 03:00:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 38,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 39,
      content: "Quảng cáo thời trang mùa hè",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-12-15 20:00:00",
      end: "2024-12-15 04:30:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 39,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 40,
      content: "Quảng cáo dịch vụ du lịch Sapa",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-12-16 22:30:00",
      end: "2024-12-16 06:00:00",
      status: "Chưa cấp phép",
      CompanyId: 2,
      BoardId: 40,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 41,
      content: "Quảng cáo đồ chơi thông minh cho bé",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-12-17 01:00:00",
      end: "2024-12-17 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 41,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 42,
      content: "Quảng cáo xe máy hiện đại",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-12-18 03:30:00",
      end: "2024-12-18 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 42,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 43,
      content: "Quảng cáo thực phẩm hữu cơ mới nhất",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-12-19 10:30:00",
      end: "2024-12-19 20:00:00",
      status: "Đã cấp phép",
      CompanyId: 1,
      BoardId: 43,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 44,
      content: "Quảng cáo sách giáo trình chất lượng",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-12-20 12:00:00",
      end: "2024-12-20 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 44,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 45,
      content: "Quảng cáo điện thoại di động cao cấp nhất",
      image: "images/permitRequests/bien-3.jpg",
      start: "2023-12-21 14:30:00",
      end: "2024-12-21 23:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 45,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 46,
      content: "Quảng cáo đồ gia dụng tiện ích",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-12-22 16:00:00",
      end: "2024-12-22 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 46,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 47,
      content: "Quảng cáo đồ điện tử công nghệ hiện đại",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-12-23 18:30:00",
      end: "2024-12-23 03:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 47,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 48,
      content: "Quảng cáo thực phẩm sạch và chất lượng cao",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-12-24 20:00:00",
      end: "2024-12-24 04:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 48,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 49,
      content: "Quảng cáo thời trang mùa đông ấm áp",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-12-25 22:30:00",
      end: "2024-12-25 06:00:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 49,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 50,
      content: "Quảng cáo dịch vụ du lịch đón xuân mới",
      image: "images/permitRequests/bien-2.jpg",
      start: "2023-12-26 01:00:00",
      end: "2024-12-26 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 2,
      BoardId: 50,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 51,
      content: "Quảng cáo đồ chơi giáo dục cho trẻ em thông minh",
      image: "images/permitRequests/bien-5.jpg",
      start: "2023-12-27 03:30:00",
      end: "2024-12-27 10:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 51,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 52,
      content: "Quảng cáo xe máy điện mới",
      image: "images/permitRequests/bien-6.jpg",
      start: "2023-12-28 10:30:00",
      end: "2024-12-28 20:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 52,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 53,
      content: "Quảng cáo thực phẩm hữu cơ chất lượng",
      image: "images/permitRequests/bien-1.jpg",
      start: "2023-12-29 12:00:00",
      end: "2024-12-29 22:30:00",
      status: "Đã cấp phép",
      CompanyId: 1,
      BoardId: 53,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 54,
      content: "Quảng cáo sách giáo trình chất lượng cao",
      image: "images/permitRequests/bien-4.jpg",
      start: "2023-12-30 14:30:00",
      end: "2024-12-30 23:00:00",
      status: "Chưa cấp phép",
      CompanyId: 4,
      BoardId: 54,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 55,
      content: "Quảng cáo điện thoại di động cao cấp nhất",
      image: "images/permitRequests/bien-7.jpg",
      start: "2023-12-31 16:00:00",
      end: "2024-12-31 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 55,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 56,
      content: "Quảng cáo đồ gia dụng thông minh",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-01 18:30:00",
      end: "2025-01-01 03:00:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 56,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 57,
      content: "Quảng cáo đồ gia dụng thông minh",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-01 12:00:00",
      end: "2025-01-01 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 57,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 58,
      content: "Quảng cáo đồ điện tử tiện ích",
      image: "images/permitRequests/bien-5.jpg",
      start: "2024-01-02 14:30:00",
      end: "2025-01-02 23:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 58,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 59,
      content: "Quảng cáo thực phẩm sạch cao cấp",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-03 16:00:00",
      end: "2025-01-03 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 59,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 60,
      content: "Quảng cáo thời trang mùa đông ấm áp",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-04 18:30:00",
      end: "2025-01-04 03:00:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 60,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 61,
      content: "Quảng cáo dịch vụ du lịch Đà Nẵng",
      image: "images/permitRequests/bien-5.jpg",
      start: "2024-01-05 01:00:00",
      end: "2025-01-05 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 2,
      BoardId: 61,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 62,
      content: "Quảng cáo đồ chơi giáo dục mới nhất",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-06 03:30:00",
      end: "2025-01-06 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 62,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 63,
      content: "Quảng cáo xe máy và phụ kiện mới",
      image: "images/permitRequests/bien-3.jpg",
      start: "2024-01-07 10:30:00",
      end: "2025-01-07 20:00:00",
      status: "Đã cấp phép",
      CompanyId: 5,
      BoardId: 63,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 64,
      content: "Quảng cáo thực phẩm hữu cơ cao cấp",
      image: "images/permitRequests/bien-6.jpg",
      start: "2024-01-08 12:00:00",
      end: "2025-01-08 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 64,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 65,
      content: "Quảng cáo sách giáo trình chất lượng cao",
      image: "images/permitRequests/bien-1.jpg",
      start: "2024-01-09 14:30:00",
      end: "2025-01-09 23:00:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 65,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 66,
      content: "Quảng cáo điện thoại di động hàng đầu",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-10 18:30:00",
      end: "2025-01-10 03:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 66,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 67,
      content: "Quảng cáo đồ gia dụng thông minh",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-11 16:00:00",
      end: "2025-01-11 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 67,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 68,
      content: "Quảng cáo đồ điện tử tiện ích",
      image: "images/permitRequests/bien-5.jpg",
      start: "2024-01-12 22:30:00",
      end: "2025-01-12 06:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 68,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 69,
      content: "Quảng cáo thực phẩm sạch cao cấp",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-13 01:00:00",
      end: "2025-01-13 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 69,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 70,
      content: "Quảng cáo thời trang mùa đông ấm áp",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-14 03:30:00",
      end: "2025-01-14 10:00:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 70,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 71,
      content: "Quảng cáo dịch vụ du lịch Đà Nẵng",
      image: "images/permitRequests/bien-5.jpg",
      start: "2024-01-15 12:00:00",
      end: "2025-01-15 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 2,
      BoardId: 71,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 72,
      content: "Quảng cáo đồ chơi giáo dục mới nhất",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-16 03:30:00",
      end: "2025-01-16 10:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 72,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 73,
      content: "Quảng cáo xe máy và phụ kiện mới",
      image: "images/permitRequests/bien-3.jpg",
      start: "2024-01-17 10:30:00",
      end: "2025-01-17 20:00:00",
      status: "Đã cấp phép",
      CompanyId: 5,
      BoardId: 73,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 74,
      content: "Quảng cáo thực phẩm hữu cơ cao cấp",
      image: "images/permitRequests/bien-6.jpg",
      start: "2024-01-18 12:00:00",
      end: "2025-01-18 22:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 74,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 75,
      content: "Quảng cáo sách giáo trình chất lượng cao",
      image: "images/permitRequests/bien-1.jpg",
      start: "2024-01-19 14:30:00",
      end: "2025-01-19 23:00:00",
      status: "Đã cấp phép",
      CompanyId: 4,
      BoardId: 75,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 76,
      content: "Quảng cáo điện thoại di động hàng đầu",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-20 18:30:00",
      end: "2025-01-20 03:00:00",
      status: "Chưa cấp phép",
      CompanyId: 3,
      BoardId: 76,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 77,
      content: "Quảng cáo đồ gia dụng thông minh",
      image: "images/permitRequests/bien-2.jpg",
      start: "2024-01-21 16:00:00",
      end: "2025-01-21 01:30:00",
      status: "Chưa cấp phép",
      CompanyId: 5,
      BoardId: 77,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 78,
      content: "Quảng cáo đồ điện tử tiện ích",
      image: "images/permitRequests/bien-5.jpg",
      start: "2024-01-22 22:30:00",
      end: "2025-01-22 06:00:00",
      status: "Đã cấp phép",
      CompanyId: 3,
      BoardId: 78,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
    {
      id: 79,
      content: "Quảng cáo thực phẩm sạch cao cấp",
      image: "images/permitRequests/bien-7.jpg",
      start: "2024-01-23 01:00:00",
      end: "2025-01-23 08:30:00",
      status: "Chưa cấp phép",
      CompanyId: 1,
      BoardId: 79,
      AccountId: 2,
      updatedAt: "2023-11-21T04:14:54",
      createdAt: "2023-11-21T04:14:54",
    },
];

module.exports = {
  permitRequests
}