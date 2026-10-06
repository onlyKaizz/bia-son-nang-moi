-- ============================================================================
-- DDL Schema Script — Bìa Sờn Nắng Mới (SSG105)
-- Database Engine : SQLite / PostgreSQL compatible
-- Target Fund     : Trung tâm Điều dưỡng Thương binh và Người có công Long Đất
-- ============================================================================

-- 1. Bảng CATEGORIES
CREATE TABLE IF NOT EXISTS categories (
    category_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    name            VARCHAR(100) NOT NULL UNIQUE,
    description     VARCHAR(255)
);

-- 2. Bảng BOOKS
CREATE TABLE IF NOT EXISTS books (
    book_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    qr_code         VARCHAR(50) NOT NULL UNIQUE,
    title           VARCHAR(255) NOT NULL,
    author          VARCHAR(150) NOT NULL,
    publish_year    INTEGER NOT NULL CHECK (publish_year BETWEEN 1900 AND 2026),
    publisher       VARCHAR(150) NOT NULL,
    category_id     INTEGER NOT NULL,
    condition_note  VARCHAR(255) NOT NULL DEFAULT 'Bìa sờn nguyên bản, đã tân trang',
    price           INTEGER NOT NULL CHECK (price BETWEEN 20000 AND 100000),
    summary         TEXT NOT NULL,
    quote           TEXT,
    cover_image_url VARCHAR(500) NOT NULL,
    status          VARCHAR(20) NOT NULL DEFAULT 'AVAILABLE' CHECK (status IN ('AVAILABLE', 'SOLD')),
    sold_at         DATETIME,
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (category_id) ON DELETE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_books_qr ON books (qr_code);
CREATE INDEX IF NOT EXISTS idx_books_status ON books (status);
CREATE INDEX IF NOT EXISTS idx_books_category ON books (category_id);

-- 3. Bảng CHARITY_CAMPAIGN
CREATE TABLE IF NOT EXISTS charity_campaign (
    campaign_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    campaign_name       VARCHAR(200) NOT NULL,
    beneficiary_name    VARCHAR(255) NOT NULL,
    beneficiary_address VARCHAR(255) NOT NULL,
    target_amount       INTEGER NOT NULL DEFAULT 3000000,
    created_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. Bảng GUESTBOOK
CREATE TABLE IF NOT EXISTS guestbook (
    entry_id        INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_name     VARCHAR(100) NOT NULL,
    book_id         INTEGER,
    message         TEXT NOT NULL,
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES books (book_id) ON DELETE SET NULL
);

-- 5. Bảng ADMIN_USERS
CREATE TABLE IF NOT EXISTS admin_users (
    user_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username        VARCHAR(50) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    full_name       VARCHAR(100) NOT NULL,
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
