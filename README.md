<main>
    <h1>Mở thư mục dự án trên Remix IDE và theo các bước sau: </h1>
    <ol>
    <li>Compile tệp .sol để lấy contractABI.</li>
    <li>Mở Ganache trên máy và deploy tệp .sol để lấy contractAddress.</li>
    <li>Chỉnh lại tệp js/config.js dựa theo contractABI và contractAddress vừa tìm được.</li>
    <li>
        Mở lại thư mục này trong CMD hoặc Terminal và khởi động và đoạn lệnh sau:
        <ul>
        <li>Nếu python2: python -m SimpleHTTPserver 7777</li>
        <li>Nếu python3: python3 -m http.server 7777</li>
        <li>Nếu windows: py -m http.server 7777</li>
        </ul>
    </li>
    <li>Mở link trên web: http://localhost:7777</li>
    </ol>
</main>
