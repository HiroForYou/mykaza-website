import { useState, type SyntheticEvent } from 'react';
import { waLink } from '../../utils/whatsapp';

/** Sin backend: el formulario arma el mensaje y abre WhatsApp. No se almacena nada. */
export default function ContactForm({ whatsapp }: { whatsapp: string }) {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Cotizar una máquina');
  const [msg, setMsg] = useState('');

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    const text = `Hola Mykaza, soy ${name}.\nConsulta: ${topic}\n${msg}`.trim();
    window.open(waLink(whatsapp, text), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Nombre
        <input className="field" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label>
        Motivo
        <select className="field" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Cotizar una máquina</option>
          <option>Consultar disponibilidad</option>
          <option>Repuestos e insumos</option>
          <option>Otra consulta</option>
        </select>
      </label>
      <label>
        Mensaje
        <textarea className="field" required value={msg} onChange={(e) => setMsg(e.target.value)} />
      </label>
      <button className="ol ol--dark submit" type="submit">Enviar consulta</button>
      <p className="note">Al enviar se abrirá WhatsApp con tu mensaje. Esta web no guarda tus datos.</p>
    </form>
  );
}
