import { memo, useEffect, useRef } from "react";
import Button from "../components/Button";
import Container from "../components/Container";

const About = () => {
  const urls = [
    "https://media.baoquangninh.com.vn/dataimages/202012/original/images1460745_anh_1.jpg",
    "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/03/ba-na-hill.jpeg",
    "https://wikiphuquoc.com/wp-content/uploads/2019/09/B%C3%A3i-D%C3%A0i-Ph%C3%BA-Qu%E1%BB%91c-WikiPhuQuoc.jpg",
    "https://vcdn1-vnexpress.vnecdn.net/2021/03/19/NhaTrang-KhoaTran-27-1616120145.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=P6rNJD2Fm6OK-HTwBviZ4A",
    "https://images.baoquangnam.vn/Storage/NewsPortal/2021/8/25/116523/Hoian-2.jpg",
  ];

  const divRef = useRef(null);

  useEffect(() => {
    let count = 0;
    const inter = setInterval(() => {
      divRef.current.childNodes.forEach((r) => {
        r.style.transform = `translateX(-${count * 100}%)`;
      });
      count++;
      count >= urls.length && (count = 0);
    }, 2000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <div className="my-24">
      <Container className={"px-9"}>
        <h1 className="my-6 text-center text-2xl text-neutral-700">Về chúng tôi</h1>
        <h1 className="my-6 text-center text-5xl font-semibold text-neutral-800">Các chuyến du lịch mới lạ</h1>
        <h1 className="mb-12 text-center text-sm text-neutral-400">Tận hưởng chuyến đi tốt nhất</h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="">
            <ul className="space-y-9">
              <li className="">
                <p className="text-3xl font-medium text-neutral-800">Lựa chọn chuyến đi phù hợp với bạn và gia đình</p>
                <p className="mt-3 text-sm text-neutral-400">Một nơi thoáng mát và nhiều cây xanh là một lựa chọn tốt</p>
              </li>
              <li className="">
                <p className="text-3xl font-medium text-neutral-800">Chuẩn bị những vật dụng cần thiết</p>
                <p className="mt-3 text-sm text-neutral-400">
                  Một chiếc điện thoại cùng với một chút hiểu biết về bản sắc văn hóa có thể giúp bạn rất nhiều
                </p>
              </li>
              <li className="">
                <p className="text-3xl font-medium text-neutral-800">Xem những gì bạn thực sự nhận được từ chúng tôi</p>
                <p className="mt-3 text-sm text-neutral-400">Niềm vui, sự gắn kết hay những khoảng thời gian thư giãn</p>
              </li>
            </ul>
            <Button className="my-9">Tìm kiếm ngay</Button>
          </div>
          <div ref={divRef} className="flex overflow-hidden rounded-xl">
            {urls.map((r, i) => (
              <img key={i} src={r} alt="" className="h-full max-h-96 w-full flex-shrink-0 rounded-xl object-cover transition-all" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(About);
