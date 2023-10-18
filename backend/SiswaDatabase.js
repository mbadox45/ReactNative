import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('siswa.db');

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

export const saveSiswa = (firstName, lastName, phoneNum, gender, jenjang, hobi, alamat, callback) => {
    let sql = "INSERT INTO siswa (first_name, last_name, phone_num, gender, jenjang, hobi, alamat) VALUES (?,?,?,?,?,?,?)";
    let params = [firstName, lastName,phoneNum,gender,jenjang,JSON.stringify(hobi),alamat];
    db.transaction(tx => {
        tx.executeSql(sql, params, (_, result) => {
            callback(result.insertId);
        })
    })
};

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

export const deleteTable = () => {
    db.transaction((tx) => {
        tx.executeSql('DROP TABLE IF EXISTS siswa;', [], (tx, result) => {
            console.log('Table deleted successfully');
        }, (error) => {
            console.log('Error deleting table:', error);
        });
    });
}
