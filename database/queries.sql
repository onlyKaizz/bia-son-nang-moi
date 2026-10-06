-- ============================================================================
-- Verification & Diagnostic Queries — Bìa Sờn Nắng Mới
-- ============================================================================

-- 1. Kiểm tra thống kê kho sách
SELECT 
    COUNT(*) AS total_books,
    SUM(CASE WHEN status = 'AVAILABLE' THEN 1 ELSE 0 END) AS books_available,
    SUM(CASE WHEN status = 'SOLD' THEN 1 ELSE 0 END) AS books_sold,
    SUM(CASE WHEN status = 'SOLD' THEN price ELSE 0 END) AS total_fund_raised_vnd
FROM books;

-- 2. Kiểm tra tiến độ gây quỹ ủng hộ Trung tâm Long Đất
SELECT 
    c.campaign_name,
    c.beneficiary_name,
    c.target_amount,
    COALESCE(SUM(b.price), 0) AS current_raised_amount,
    ROUND((COALESCE(SUM(b.price), 0) * 100.0) / c.target_amount, 1) AS progress_percent
FROM charity_campaign c
LEFT JOIN books b ON b.status = 'SOLD'
GROUP BY c.campaign_id;

-- 3. Truy vấn nhanh khi khách quét mã QR 'BSNM-001'
SELECT 
    b.book_id,
    b.qr_code,
    b.title,
    b.author,
    b.publish_year,
    b.publisher,
    c.name AS category_name,
    b.price,
    b.condition_note,
    b.summary,
    b.quote,
    b.cover_image_url,
    b.status
FROM books b
JOIN categories c ON b.category_id = c.category_id
WHERE b.qr_code = 'BSNM-001';
