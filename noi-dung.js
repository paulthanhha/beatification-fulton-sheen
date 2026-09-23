/* =====================================================================
   NỘI DUNG TRANG — chỉ cần sửa file này, không cần đụng index.html
   =====================================================================
   CÁCH SỬA (mở bằng Notepad, TextEdit hoặc VS Code):
   1. Chỉ sửa chữ nằm GIỮA hai dấu ngoặc kép "..."
   2. Giữ nguyên dấu phẩy , ở cuối mỗi dòng và các dấu { } [ ]
   3. Trong chữ nếu cần dấu ngoặc kép, dùng “ ” (ngoặc cong) thay vì "
   4. Có thể dùng <em>...</em> để in nghiêng, <strong>...</strong> để in đậm
   5. Đổi ảnh: chép ảnh mới vào cùng thư mục, rồi sửa tên file ở mục anh.file
      (nên dùng ảnh nền trong suốt .png hoặc .webp, khoảng 500–600px chiều ngang)
   6. Lưu file, mở index.html bằng trình duyệt để xem thử
   7. Nếu trang trắng hoặc hỏng: thường do thiếu dấu phẩy hoặc dấu ngoặc kép.
      Bấm F12 → tab Console để xem dòng bị lỗi.

   ĐỔI SANG MỘT VỊ THÁNH KHÁC: sửa lần lượt từng mục bên dưới
   (tên, ngày lễ, ảnh, thành tựu, trích dẫn, lời nguyện, nguồn).
   Thêm/bớt thành tựu: chép nguyên một khối { ... }, dán tiếp, nhớ dấu phẩy.
   Số ô thành tựu đẹp nhất là 4, 8 hoặc 12.
   ===================================================================== */

window.NOI_DUNG = {

  // Tên hiện trên tab trình duyệt
  tenTrang: "Chân phước Fulton Sheen",

  // ---------- NGÀY LỄ ----------
  suKien: {
    // Định dạng: "NĂM-THÁNG-NGÀYTGIỜ:PHÚT:00" + múi giờ nơi cử hành
    // Ví dụ giờ Việt Nam: "2027-05-01T09:00:00+07:00"
    thoiGian: "2026-09-24T14:00:00-05:00",
    daXacNhan: true,            // false nếu ngày chưa chính thức
    diaDiem: "The Dome at America's Center, St. Louis, Missouri",
    linkTrucTiep: "https://www.celebratesheen.com/livestream", // để "" nếu không có
    chuLinkTrucTiep: "Xem trực tiếp Thánh lễ"
  },

  // ---------- ẢNH CHÂN DUNG ----------
  anh: {
    file: "chan-dung.webp",
    moTa: "Chân dung Đức Tổng Giám mục Fulton J. Sheen",
    chuThich: "Fulton J. Sheen (1895–1979)"
  },

  // ---------- ĐẦU TRANG: TRƯỚC NGÀY LỄ ----------
  truocLe: {
    nhan: "Hướng về ngày phong Chân phước",
    tieuDeDong1: "Đấng Đáng kính",
    tieuDeDong2: "Fulton J. Sheen",
    moTa: "Tổng Giám mục, nhà truyền giáo trên sóng phát thanh và truyền hình, người dạy cả một thế hệ rằng cuộc đời đáng sống. Thánh lễ phong Chân phước cử hành tại St. Louis, Hoa Kỳ."
  },

  // ---------- ĐẦU TRANG: SAU NGÀY LỄ ----------
  sauLe: {
    nhan: "Tạ ơn Chúa",
    tieuDeDong1: "Chân phước",
    tieuDeDong2: "Fulton J. Sheen",
    moTa: "Được tôn phong Chân phước ngày 24/9/2026 tại St. Louis, Hoa Kỳ. Xin ngài chuyển cầu cho chúng ta.",
    chuDemNgay: "ngày kể từ lễ phong Chân phước"
  },

  // ---------- HAI NÚT CHÍNH ----------
  nut: {
    hoc: "Học từ giáo huấn của ngài",
    cauNguyen: "Cầu nguyện"
  },

  // ---------- THÀNH TỰU (gallery) ----------
  thanhTuu: {
    nhan: "Một đời phục vụ",
    tieuDe: "Thành tựu",
    moTa: "Những dấu mốc trong sứ vụ của ngài. Chạm vào một mốc để đọc thêm.",
    muc: [
      {
        nam: "1923",
        tieuDe: "Tiến sĩ Triết học, Đại học Louvain",
        tomTat: "Người Mỹ đầu tiên nhận giải Cardinal Mercier về triết học.",
        chiTiet: [
          "Sinh ngày 8/5/1895 tại El Paso, Illinois, Peter John Sheen (tên Fulton lấy theo họ mẹ) lớn lên ở Peoria. Ngài thụ phong linh mục ngày 20/9/1919 tại Nhà thờ Chính tòa St. Mary, Peoria.",
          "Sau thụ phong, cha Sheen được gửi đi học tại Đại học Công giáo Hoa Kỳ ở Washington, rồi sang Đại học Công giáo Louvain (Bỉ), nơi ngài đậu Tiến sĩ Triết học năm 1923.",
          "Cùng năm, ngài nhận giải Cardinal Mercier về Triết học quốc tế và là người Mỹ đầu tiên đạt vinh dự này. Luận án của ngài được xuất bản thành sách <em>God and Intelligence in Modern Philosophy</em> (1925).",
          "Trở về Hoa Kỳ, ngài làm cha phó một giáo xứ nhỏ ở Peoria trước khi được mời giảng dạy. Từ 1927 đến 1950, ngài dạy thần học và triết học tại Đại học Công giáo Hoa Kỳ."
        ]
      },
      {
        nam: "1930",
        tieuDe: "“The Catholic Hour”",
        tomTat: "Khoảng 22 năm trên sóng phát thanh NBC.",
        chiTiet: [
          "Năm 1930, cha Sheen bắt đầu giảng trong chương trình phát thanh <em>The Catholic Hour</em> vào tối Chủ nhật trên đài NBC.",
          "Chương trình kéo dài khoảng hai thập niên, mỗi tuần có khoảng 4 triệu thính giả. Ngài nói về đức tin, luân lý và những vấn đề thời sự của thế giới, bằng lối nói giản dị mà sâu sắc.",
          "Giọng nói của ngài trở nên quen thuộc với các gia đình Mỹ, cả Công giáo lẫn không Công giáo. Nhiều người tìm đến đức tin nhờ ngài, trong đó có nhà văn, nhà ngoại giao Clare Boothe Luce, người được chính ngài hướng dẫn gia nhập Giáo hội."
        ]
      },
      {
        nam: "1950",
        tieuDe: "Hội Truyền bá Đức tin Hoa Kỳ",
        tomTat: "16 năm nâng đỡ các xứ truyền giáo.",
        chiTiet: [
          "Năm 1950, ngài được bổ nhiệm làm Giám đốc Quốc gia Hội Truyền bá Đức tin tại Hoa Kỳ và giữ nhiệm vụ này suốt 16 năm, đến 1966.",
          "Trong thời gian đó, ngài quyên góp hàng triệu đô-la để nâng đỡ hoạt động truyền giáo của Giáo hội trên khắp thế giới, từ châu Phi đến châu Á.",
          "Ngày 11/6/1951, ngài được tấn phong Giám mục phụ tá Tổng Giáo phận New York tại Rôma. Từ đây, người ta quen gọi ngài là “Bishop Sheen”."
        ]
      },
      {
        nam: "1952",
        tieuDe: "“Life Is Worth Living”",
        tomTat: "Ước tính 30 triệu khán giả mỗi tuần.",
        chiTiet: [
          "Chương trình truyền hình <em>Life Is Worth Living</em> phát sóng vào tối thứ Ba, 8 giờ, trong sáu năm, đến 1957. Ban đầu chỉ có ba đài phát, nhưng số đài nhanh chóng tăng lên.",
          "Ngài phải cạnh tranh giờ phát sóng với những ngôi sao giải trí nổi tiếng nhất thời đó như Milton Berle và Frank Sinatra, và vẫn giữ được lượng khán giả rất lớn.",
          "Không kịch bản, không ghi chú: ngài chỉ có một tấm bảng đen, một viên phấn và Tin Mừng. Khi bảng kín chữ, ngài đùa rằng có một “thiên thần” đã lau bảng giúp.",
          "Ước tính khoảng 30 triệu người xem mỗi tuần. Sau đó, từ 1961 đến 1968, ngài tiếp tục với chương trình <em>The Fulton Sheen Program</em>."
        ]
      },
      {
        nam: "1953",
        tieuDe: "Giải Emmy",
        tomTat: "Nhân vật truyền hình xuất sắc nhất.",
        chiTiet: [
          "Năm 1953, Giám mục Sheen nhận giải Emmy “Nhân vật truyền hình xuất sắc nhất”, vượt qua các ngôi sao giải trí được đề cử cùng năm.",
          "Khi nhận giải, ngài dí dỏm cảm ơn “bốn người viết kịch bản của tôi: Matthêu, Máccô, Luca và Gioan.”",
          "Giải thưởng cho thấy một điều hiếm có: một chương trình giảng dạy đức tin có thể thu hút công chúng rộng rãi trên truyền hình thương mại."
        ]
      },
      {
        nam: "1958",
        tieuDe: "Tác phẩm “Life of Christ”",
        tomTat: "Một trong hơn 50 tác phẩm của ngài.",
        chiTiet: [
          "Năm 1958, ngài xuất bản <em>Life of Christ</em>, suy niệm về cuộc đời Chúa Giêsu với trọng tâm là Thập giá. Đây là một trong những tác phẩm được đọc nhiều nhất của ngài.",
          "Trong suốt cuộc đời, ngài để lại hơn 50 tác phẩm, viết cho cả người Công giáo lẫn người chưa biết Chúa.",
          "Tiêu biểu khác: <em>Peace of Soul</em> (1949) về bình an nội tâm; <em>Three to Get Married</em> (1951) về hôn nhân, với Thiên Chúa là “người thứ ba”; <em>The World's First Love</em> (1952) về Đức Maria.",
          "Ngoài sách, ngài còn viết các mục báo định kỳ được đăng trên nhiều tờ báo khắp nước Mỹ. Hồi ký <em>Treasure in Clay</em> được xuất bản năm 1980, sau khi ngài qua đời."
        ]
      },
      {
        nam: "1962",
        tieuDe: "Công đồng Vaticanô II",
        tomTat: "Tham dự đầy đủ bốn khóa họp.",
        chiTiet: [
          "Ngài tham dự cả bốn khóa họp của Công đồng Vaticanô II (1962–1965), với mối quan tâm đặc biệt đến sứ vụ truyền giáo của Giáo hội.",
          "Mùa thu năm 1966, ngài được bổ nhiệm làm Giám mục Giáo phận Rochester (New York). Tại đây, ngài nỗ lực áp dụng tinh thần Công đồng, đặc biệt là quan tâm đến người nghèo.",
          "Sau gần ba năm, năm 1969, ngài từ nhiệm và được Đức Phaolô VI phong Tổng Giám mục hiệu tòa Newport (xứ Wales). Những năm sau đó, ngài tiếp tục giảng tĩnh tâm và viết sách."
        ]
      },
      {
        nam: "1979",
        tieuDe: "Gặp Thánh Gioan Phaolô II",
        tomTat: "“Người con trung thành của Giáo hội.”",
        chiTiet: [
          "Ngày 2/10/1979, tại Nhà thờ Chính tòa St. Patrick (New York), Thánh Giáo hoàng Gioan Phaolô II ôm hôn ngài và nói: “Ngài đã viết và nói rất hay về Chúa Giêsu. Ngài là người con trung thành của Giáo hội!”",
          "Hai tháng sau, ngày 9/12/1979, ngài qua đời khi đang cầu nguyện trước Thánh Thể trong nhà nguyện riêng.",
          "Án phong thánh được mở năm 2002. Năm 2012, Đức Bênêđictô XVI tuyên bố ngài là Đấng Đáng kính. Ngày 6/7/2019, Đức Phanxicô công nhận phép lạ: bé James Fulton Engstrom sống lại sau 61 phút không có nhịp tim và hơi thở khi chào đời.",
          "Ngày 27/6/2019, thi hài ngài được đưa về Nhà thờ Chính tòa St. Mary, Peoria, nơi ngài đã thụ phong linh mục 100 năm trước."
        ]
      }
    ]
  },

  // ---------- GIÁO HUẤN ----------
  giaoHuan: {
    nhan: "Giáo huấn",
    tieuDe: "Học từ giáo huấn của ngài",
    moTa: "Chỉ với một tấm bảng đen, một viên phấn và Tin Mừng, ngài nói với hàng triệu người.",
    trichDan: [
      {
        vi: "“Câu chuyện tình yêu vĩ đại nhất mọi thời đại nằm trong một tấm Bánh trắng nhỏ bé.”",
        goc: "“The greatest love story of all time is contained in a tiny white Host.”",
        chuDe: "Thánh Thể"
      },
      {
        vi: "“Không có đến một trăm người ghét Giáo hội Công giáo; nhưng có hàng triệu người ghét điều họ lầm tưởng là Giáo hội.”",
        goc: "“There are not over a hundred people in America who hate the Catholic Church; there are millions, however, who hate what they wrongly perceive the Catholic Church to be.”",
        chuDe: "Đối thoại"
      }
    ],
    tieuDeTaiLieu: "Đọc và nghe tiếp",
    taiLieu: [
      { ten: "Các tập “Life Is Worth Living”", link: "https://www.youtube.com/results?search_query=Fulton+Sheen+Life+Is+Worth+Living" },
      { ten: "<em>Life of Christ</em> (1958)", link: "" },
      { ten: "<em>Peace of Soul</em> (1949)", link: "" },
      { ten: "<em>Three to Get Married</em> (1951)", link: "" }
    ]
  },

  // ---------- CẦU NGUYỆN ----------
  cauNguyen: {
    nhan: "Hiệp ý",
    tieuDe: "Cầu nguyện",
    moTaTruocLe: "Cùng hiệp ý cầu nguyện cho ngày phong Chân phước.",
    moTaSauLe: "Tạ ơn Chúa, và tiếp tục cầu nguyện cho ngày ngài được phong Hiển thánh.",
    tenKinh: "Kinh xin ơn nhờ lời chuyển cầu của Đức Tổng Giám mục Fulton J. Sheen",
    // Mỗi câu một dòng
    cauTiengViet: [
      "Lạy Chúa Cha hằng hữu, chỉ mình Chúa ban cho chúng con mọi phúc lành trên trời dưới đất, nhờ sứ vụ cứu chuộc của Con Chúa là Đức Giêsu Kitô, và nhờ tác động của Chúa Thánh Thần.",
      "Nếu đẹp ý Chúa, xin tôn vinh tôi tớ Chúa là Tổng Giám mục Fulton J. Sheen, bằng cách ban cho con ơn con đang cầu xin nhờ lời chuyển cầu của ngài <em>(nêu ý xin)</em>.",
      "Con tin tưởng dâng lời cầu nguyện này nhờ Đức Giêsu Kitô, Chúa chúng con.",
      "Amen."
    ],
    tieuDeNguyenVan: "Nguyên văn tiếng Anh",
    cauNguyenVan: [
      "Eternal Father, You alone grant us every blessing in Heaven and on earth, through the redemptive mission of Your Divine Son, Jesus Christ, and by the working of the Holy Spirit.",
      "If it be according to Your Will, glorify Your servant, Archbishop Fulton J. Sheen, by granting the favor I now request through his prayerful intercession <em>(mention your request here)</em>.",
      "I make this prayer confidently through Jesus Christ, Our Lord.",
      "Amen."
    ],
    phepIn: "Imprimatur: +Most Reverend Daniel R. Jenky, C.S.C., Giám mục Peoria",
    ghiChuNguon: "Nguồn: <a href=\"https://www.celebratesheen.com/prayer-for-favor\" target=\"_blank\" rel=\"noopener\">Prayer for Favor</a>, Quỹ Tổng Giám mục Fulton J. Sheen. Bản tiếng Việt là bản dịch tham khảo, chưa được phê chuẩn chính thức. Xem thêm <a href=\"https://www.celebratesheen.com/prayer-for-canonization\" target=\"_blank\" rel=\"noopener\">Kinh xin phong Hiển thánh</a>.",
    loiMoi: "<strong>Giờ Thánh mỗi ngày.</strong> Suốt đời linh mục, ngài dành một giờ mỗi ngày trước Thánh Thể. Hãy bắt đầu với 15 phút."
  },

  // ---------- CHÂN TRANG ----------
  chanTrang: "Trang tưởng niệm không chính thức · Nguồn: <a href=\"https://www.celebratesheen.com\" target=\"_blank\" rel=\"noopener\">celebratesheen.com</a> · <a href=\"https://www.cdop.org/sheen\" target=\"_blank\" rel=\"noopener\">Giáo phận Peoria</a>"
};
