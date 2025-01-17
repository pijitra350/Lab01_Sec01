// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

// Mock data สำหรับรายการหนังสือ
const books = [
    {
        "Code": "BK001",
        "Title": " จิตวิทยาสายดาร์ก",
        "Cover": "https://b2s-du-club-cdn0.b2s.co.th/img_article_layer/6121-image_th-1418.png",
        "Description": " จิตวิทยาสายดาร์ก",
        "Category": 1,
        "Author": "kae",
        "Publishing": "kae",
        "Price": "200 THB",
        "Bestsellers": true,
        "Suggestions": true
      },
      {
          "Code": "BK002",
          "Title": "ปีศาจตัวนั้นคือฉันเอง",
          "Cover": "https://b2s-du-club-cdn0.b2s.co.th/img_article_layer/6123-image_th-2888.png",
          "Description": "ปีศาจตัวนั้นคือฉันเอง",
          "Category": 2,
          "Author": "kae",
          "Publishing": "kae",
          "Price": "300 THB",
          "Bestsellers": true,
          "Suggestions": true
      },
      {
          "Code": "BK003",
          "Title": "คดีฆาตกรรมในบ้านสิบเหลี่ยม ",
          "Cover": "https://b2s-du-club-cdn0.b2s.co.th/img_article_layer/6125-image_th-8299.png",
          "Description": "คดีฆาตกรรมในบ้านสิบเหลี่ยม ",
          "Category": 3,
          "Author": "kae",
          "Publishing": "kae",
          "Price": "400 THB",
          "Bestsellers": true,
          "Suggestions": false
      },
      {
        "Code": "BK004",
        "Title": "ใช้คลื่นพลังบวก ดึงดูดพลังสุข ",
        "Cover": "https://b2s-du-club-cdn0.b2s.co.th/img_article_layer/6127-image_th-1724.png",
        "Description": "ใช้คลื่นพลังบวก ดึงดูดพลังสุข ",
        "Category": 4,
        "Author": "kae",
        "Publishing": "kae",
        "Price": "500 THB",
        "Bestsellers": true,
        "Suggestions": true
      },
      {
          "Code": "BK005",
          "Title": "ฆาตกรมนุษย์กบกับศพปริศนา ",
          "Cover": "https://pim-cdn0.ofm.co.th/products/large/DA04391.jpg",
          "Description": "ฆาตกรมนุษย์กบกับศพปริศนา ",
          "Category": 5,
          "Author": "kae",
          "Publishing": "kae",
          "Price": "600 THB",
          "Bestsellers": true,
          "Suggestions": false
      },
];

// Component สำหรับแสดงสถานะ "แนะนำ" หรือ "ขายดี"
const StatusCheck = ({ isBestseller, isSuggestion }: { isBestseller: boolean; isSuggestion: boolean }) => {
    return (
        <div>
            {isBestseller && <span>{'ขายดี!'}</span>}
            {isSuggestion && <span>{'แนะนำ'}</span>}
        </div>
    );
};

const BookList = () => {
    const [filter, setFilter] = useState<'all' | 'bestseller' | 'suggestion'>('all'); // สถานะการกรอง
    
    // กรองรายการหนังสือตามประเภท
    const filteredBooks = books.filter(book => {
        if (filter === 'all') return true;
        if (filter === 'bestseller' && book.Bestsellers) return true;
        if (filter === 'suggestion' && book.Suggestions) return true;
        return false;
    });

    // Map ข้อมูลหนังสือเพื่อแสดงใน UI
    const listItems = filteredBooks.map((book, index) => (
        <div className="m-3" key={index}>
                <img src={book.Cover} alt={book.Title} className="mb-3 w-full h-50 object-cover rounded-lg" />
                <b className="text-base">
                    <StatusCheck isBestseller={book.Bestsellers} isSuggestion={book.Suggestions} />
                </b>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.Title + " (รหัส: " + book.Code + ")"}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{book.Description}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ผู้แต่ง:</strong> {book.Author}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>สำนักพิมพ์:</strong> {book.Publishing}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ราคา:</strong> {book.Price}
                </p>
        </div>
    ));

    return (
        <div className="m-3">
  
            <div className="">
                {/* ปุ่มสำหรับกรองข้อมูล */}
                <button onClick={() => setFilter('all')} >ทั้งหมด</button>
                <button onClick={() => setFilter('bestseller')} >ขายดี</button>
                <button onClick={() => setFilter('suggestion')} >แนะนำ</button>
            </div>
            <strong className="text-xl">หนังสือที่แนะนำ</strong>
            <br />
            <strong className="text-xl">ข้อมูลอ้างอิงมาจาก google</strong>
            {listItems}

        </div>
    );
};

export default BookList;