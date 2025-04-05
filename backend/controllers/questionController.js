const sql = require('mssql');
const dbConfig = require('../db/config');

const createQuestion = async (req, res) => {
    try {
        const {
            enunciado,
            alternativa_a,
            alternativa_b,
            alternativa_c,
            alternativa_d,
            alternativa_e,
            gabarito,
            resolucao,
            elaborador,
            nivel_dificuldade,
            conhecimentos,
            referencia_bibliografica,
            tema,
            status,
            validada,
            nivel_dificuldade_apos_validacao,
            validador
        } = req.body;

        const pool = await sql.connect(dbConfig);
        await pool.request()
            .input('enunciado', sql.NVarChar, enunciado)
            .input('alternativa_a', sql.NVarChar, alternativa_a)
            .input('alternativa_b', sql.NVarChar, alternativa_b)
            .input('alternativa_c', sql.NVarChar, alternativa_c)
            .input('alternativa_d', sql.NVarChar, alternativa_d)
            .input('alternativa_e', sql.NVarChar, alternativa_e)
            .input('gabarito', sql.NVarChar, gabarito)
            .input('resolucao', sql.NVarChar, resolucao)
            .input('elaborador', sql.NVarChar, elaborador)
            .input('nivel_dificuldade', sql.NVarChar, nivel_dificuldade)
            .input('conhecimentos', sql.NVarChar, conhecimentos)
            .input('referencia_bibliografica', sql.NVarChar, referencia_bibliografica)
            .input('tema', sql.NVarChar, tema)
            .input('status', sql.NVarChar, status)
            .input('validada', sql.Bit, validada)
            .input('nivel_dificuldade_apos_validacao', sql.NVarChar, nivel_dificuldade_apos_validacao)
            .input('validador', sql.NVarChar, validador)
            .execute('CriarQuestaoObjetiva');

        res.status(200).json({ message: 'Questão criada com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar questão:', error);
        res.status(500).json({ error: 'Erro ao criar questão' });
    }
};

module.exports = { createQuestion };
