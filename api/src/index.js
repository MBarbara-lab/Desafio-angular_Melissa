const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public/img")));

app.post("/login", (req, res) => {
    try {
        const { name, password } = req.body

        if (!name || !password) {
            return res.status(400).json({
                message: "O campo de usuário ou senha não foi preenchido!"
            });
        }

        if (name !== "admin" || password !== "123") {
            return res.status(401).json({
                message: "O nome de usuário ou senha está incorreto ou não foi cadastrado!"
            });
        }

        return res.status(200).json({
            id: 1,
            name: "admin",
            email: "admin@email.com"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.get("/vehicles", (req, res) => {
    try {
        const vehicles = [
            {
                id: 1,
                vehicle: "Ranger",
                totalVolume: 1500,
                connected: 500,
                softwareUpdates: 750,
                vin: "2FRHDUYS2Y63NHD22454",
                img: "http://localhost:3001/ranger.png"
            },
            {
                id: 2,
                vehicle: "Mustang",
                totalVolume: 1000,
                connected: 600,
                softwareUpdates: 310,
                vin: "2RFAASOYS4E4HDU34875",
                img: "http://localhost:3001/mustang.png"
            },
            {
                id: 3,
                vehicle: "Territory",
                totalVolume: 1900,
                connected: 270,
                softwareUpdates: 970,
                vin: "1GKFK16K0RJ736886",
                img: "http://localhost:3001/territory.png"
            },
            {
                id: 4,
                vehicle: "Bronco Sport",
                totalVolume: 1200,
                connected: 310,
                softwareUpdates: 290,
                vin: "JH4DA9350PS016433",
                img: "http://localhost:3001/broncoSport.png"
            }
        ];

        return res.status(200).json({ ...vehicles });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.post("/vehicleData", (req, res) => {
    try {
        const { vin } = req.body

        switch (vin) {
            case "2FRHDUYS2Y63NHD22454":
                return res.status(200).json({
                    id: 1,
                    odometer: 50000,
                    fuelLevel: 90,
                    status: "on",
                    lat: -12.2322,
                    long: -35.2314
                });
            
            case "2RFAASOYS4E4HDU34875":
                return res.status(200).json({
                    id: 2,
                    odometer: 10000,
                    fuelLevel: 60,
                    status: "on",
                    lat: 14.2321,
                    long: -12.5344
                });

            case "1GKFK16K0RJ736886":
                return res.status(200).json({
                    id: 3,
                    odometer: 80000,
                    fuelLevel: 45,
                    status: "off",
                    lat: 44.2321,
                    long: 22.5344
                })

            case "JH4DA9350PS016433":
                return res.status(200).json({
                    id: 4,
                    odometer: 120000,
                    fuelLevel: 30,
                    status: "off",
                    lat: -10.2321,
                    long: 63.5344
                })
        
            default:
                return res.status(400).json({
                    message: "Código VIN utilizado não foi encontrado!"
                });
        }


    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
})

app.listen(3001, () => {
    console.log("http://localhost:3001/");
});
