import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('siswa.db');

// Create Table or Setup Table
export const setupDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS siswa (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR, last_name VARCHAR, phone_num INT(13), gender VARCHAR, jenjang VARCHAR, hobi JSON, alamat VARCHAR)',
            [],
            (result) => {console.log('Table berhasil dibuat'); },
            (error) => {console.log('Gagal Membuat table');}
        )
    })
}

// Delete Table
export const deleteTable = () => {
    db.transaction((tx) => {
        tx.executeSql('DROP TABLE IF EXISTS siswa;', [], (tx, result) => {
            console.log('Table deleted successfully');
        }, (error) => {
            console.log('Error deleting table:', error);
        });
    });
}

// Create Siswa
export const saveSiswa = (firstName, lastName, phoneNum, gender, jenjang, hobi, alamat, callback) => {
    let sql = "INSERT INTO siswa (first_name, last_name, phone_num, gender, jenjang, hobi, alamat) VALUES (?,?,?,?,?,?,?)";
    let params = [firstName, lastName,phoneNum,gender,jenjang,JSON.stringify(hobi),alamat];
    db.transaction(tx => {
        tx.executeSql(sql, params, (_, result) => {
            callback(result.insertId);
        })
    })
};
// Load Data Siswa
export const getSiswa = async(setData) => {
    try {
        let sql = 'SELECT * FROM siswa';
        await db.transaction(tx => {
            tx.executeSql(sql, [], (tx,resultSet) => {
                let length = resultSet.rows.length;
                let newData = [];
                for (let i = 0; i < length; i++) {
                    newData.push(resultSet.rows.item(i))
                }
                setData(newData);
            }, (err) => {
                console.log(err);
            })
        })
    } catch (error) {
        console.log('error show siswa', error);
    }
}

export const getSiswaByName = (nama,setData) => {
    let sql = `SELECT * FROM siswa WHERE first_name LIKE '%${nama}%' OR last_name LIKE '%${nama}%'`;
    db.transaction(tx => {
        tx.executeSql(sql, [], (tx, resultSet) => {
            let length = resultSet.rows.length;
            let newData = [];
            for (let i = 0; i < length; i++) {
                newData.push(resultSet.rows.item(i))
            }
            setData(newData);
        }, err => console.log(err))
    })
}

export const deleteSiswa = (id) => {
    let sql = 'DELETE FROM siswa WHERE id = ?';
    db.transaction(tx => {
        tx.executeSql(sql, [id], result => {
            console.log("Siswa berhasil di hapus");
        }, (err) => {
            console.log("Gagal menghapus siswa");
        })
    })
}

export const updateSiswa = (firstName, lastName, phoneNum, gender, jenjang, hobi, alamat, id) => {
    let sql = "UPDATE siswa SET first_name = ?, last_name = ?, phone_num = ?, gender = ?, jenjang = ?, hobi = ?, alamat = ? WHERE id = ?";
    let params = [firstName, lastName,phoneNum,gender,jenjang,JSON.stringify(hobi),alamat,id];
    db.transaction(tx => {
        tx.executeSql(sql,params, (result) => {
            console.log('Berhasil update siswa');
        }, (err) => console.log(err))
    })
}
