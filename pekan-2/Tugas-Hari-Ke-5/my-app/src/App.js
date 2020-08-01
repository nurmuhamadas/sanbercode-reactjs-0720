import React from 'react';
import './App.css';

function App() {
  return (

    <div className="container">
      <form>
        <h1 className="title">Form Pembelian Buah</h1>
        <div className="form-element">
          <label for="name">Nama Pelanggan</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-element">
          <label for="">Daftar Item</label>
          <div className="checkbox">
            <div className="checkbox-item">
              <input type="checkbox" name="semangka" id="semangka" />
              <label for="semangka">Semangka</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="jeruk" id="jeruk" />
              <label for="jeruk">Jeruk</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="nanas" id="nanas" />
              <label for="nanas">Nanas</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="salak" id="salak" />
              <label for="salak">Salak</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="anggur" id="anggur" />
              <label for="anggur">Anggur</label>
            </div>
          </div>
        </div>
        <button>Kirim</button>
      </form>
    </div>
  );
}

export default App;
