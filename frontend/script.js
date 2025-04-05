// frontend/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("question-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
      enunciado: form.enunciado.value,
      alternativa_a: form.alternativa_a.value,
      alternativa_b: form.alternativa_b.value,
      alternativa_c: form.alternativa_c.value,
      alternativa_d: form.alternativa_d.value,
      alternativa_e: form.alternativa_e.value,
      gabarito: form.gabarito.value,
      resolucao: form.resolucao.value,
      elaborador: form.elaborador.value,
      nivel_dificuldade: form.nivel_dificuldade.value,
      conhecimentos: form.conhecimentos.value,
      referencia_bibliografica: form.referencia_bibliografica.value,
      tema: form.tema.value,
      status: form.status.value,
      validada: form.validada.checked,
      nivel_dificuldade_apos_validacao: form.nivel_dificuldade_apos_validacao.value || null,
      validador: form.validador.value || null,
    };

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.text();
        alert("Erro ao enviar questão: " + error);
        return;
      }

      alert("Questão cadastrada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar questão:", error);
      alert("Erro ao enviar questão. Veja o console para mais detalhes.");
    }
  });
});
