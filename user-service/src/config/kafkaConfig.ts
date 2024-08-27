import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'user-events',
    brokers: ['demo-kafka:9092']
})