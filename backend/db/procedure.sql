// backend/db/procedure.sql

CREATE PROCEDURE CriarQuestaoObjetiva
    @enunciado NVARCHAR(MAX),
    @alternativa_a NVARCHAR(255),
    @alternativa_b NVARCHAR(255),
    @alternativa_c NVARCHAR(255),
    @alternativa_d NVARCHAR(255),
    @alternativa_e NVARCHAR(255),
    @gabarito CHAR(1),
    @resolucao NVARCHAR(MAX),
    @elaborador NVARCHAR(255),
    @nivel_dificuldade NVARCHAR(50),
    @conhecimentos NVARCHAR(255),
    @referencia_bibliografica NVARCHAR(255),
    @tema NVARCHAR(255),
    @status NVARCHAR(50),
    @validada BIT,
    @nivel_dificuldade_apos_validacao NVARCHAR(50) = NULL,
    @validador NVARCHAR(255) = NULL
AS
BEGIN
    INSERT INTO Questoes (
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
    )
    VALUES (
        @enunciado,
        @alternativa_a,
        @alternativa_b,
        @alternativa_c,
        @alternativa_d,
        @alternativa_e,
        @gabarito,
        @resolucao,
        @elaborador,
        @nivel_dificuldade,
        @conhecimentos,
        @referencia_bibliografica,
        @tema,
        @status,
        @validada,
        @nivel_dificuldade_apos_validacao,
        @validador
    );
END;
