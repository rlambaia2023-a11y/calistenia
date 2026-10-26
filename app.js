const EXERCICIOS = [
 {id:'flexao', nome:'Flexão de braço', cat:'Empurrar', nivel:'Iniciante', equip:'Nenhum', musculos:['Peito','Tríceps','Core'], anim:'flexao', passos:['Mãos na largura dos ombros, corpo reto da cabeça aos pés.','Desça o peito até quase tocar o chão, sem deixar o quadril cair.','Empurre o chão e volte, sem travar o cotovelo no fim.'], erros:'Quadril caído ou bumbum lá em cima quebra a linha do corpo.'},
 {id:'flexao-inclinada', nome:'Flexão inclinada', cat:'Empurrar', nivel:'Iniciante', equip:'Nenhum', musculos:['Peito','Tríceps'], anim:'flexao', passos:['Mãos apoiadas em mesa ou banco firme.','Mesma linha reta do corpo, desça devagar.','Use para chegar à flexão no chão.'], erros:'Apoio instável ou pressa na descida.'},
 {id:'agachamento', nome:'Agachamento', cat:'Pernas', nivel:'Iniciante', equip:'Nenhum', musculos:['Quadríceps','Glúteos'], anim:'agachamento', passos:['Pés na largura dos ombros, peito aberto.','Desça como se fosse sentar, joelhos na direção dos pés.','Suba empurrando o chão com o pé todo.'], erros:'Joelho entrando para dentro ou calcanhar saindo do chão.'},
 {id:'afundo', nome:'Afundo', cat:'Pernas', nivel:'Iniciante', equip:'Nenhum', musculos:['Quadríceps','Glúteos'], anim:'afundo', passos:['Um passo à frente, tronco ereto.','Desça até os dois joelhos perto de 90 graus.','Volte e troque a perna.'], erros:'Passo curto demais, que joga o joelho para frente.'},
 {id:'prancha', nome:'Prancha', cat:'Core', nivel:'Iniciante', equip:'Nenhum', musculos:['Core'], anim:'prancha', passos:['Cotovelos abaixo dos ombros, corpo reto.','Aperte glúteos e abdômen, respire normal.','Segure o tempo sem deixar o quadril cair.'], erros:'Quadril caído é o erro mais comum — pare antes de perder a forma.'},
 {id:'prancha-lateral', nome:'Prancha lateral', cat:'Core', nivel:'Intermediário', equip:'Nenhum', musculos:['Core','Oblíquos'], anim:'prancha', passos:['Cotovelo abaixo do ombro, pés empilhados.','Eleve o quadril até formar uma linha.','Segure dos dois lados.'], erros:'Quadril rodando para frente.'},
 {id:'barra-fixa', nome:'Barra fixa', cat:'Puxar', nivel:'Intermediário', equip:'Barra', musculos:['Costas','Bíceps'], anim:'barra', passos:['Pegada um pouco além dos ombros.','Puxe o peito em direção à barra, sem balançar.','Desça com controle até estender os braços.'], erros:'Balanço do corpo para “roubar” a subida.'},
 {id:'barra-australiana', nome:'Barra australiana', cat:'Puxar', nivel:'Iniciante', equip:'Barra', musculos:['Costas','Bíceps'], anim:'barra', passos:['Barra baixa, corpo inclinado, pés no chão.','Puxe o peito até a barra.','Quanto mais horizontal, mais difícil.'], erros:'Quadril caído no meio da série.'},
 {id:'mergulho', nome:'Mergulho nas paralelas', cat:'Empurrar', nivel:'Intermediário', equip:'Paralelas', musculos:['Peito','Tríceps','Ombros'], anim:'flexao', passos:['Braços estendidos, tronco levemente inclinado.','Desça até o ombro ficar abaixo do cotovelo.','Empurre até estender sem travar com tranco.'], erros:'Descer fundo demais com dor no ombro — respeite sua amplitude.'},
 {id:'burpee', nome:'Burpee', cat:'Pernas', nivel:'Intermediário', equip:'Nenhum', musculos:['Corpo todo'], anim:'salto', passos:['Agache, mãos no chão, jogue os pés para trás.','Faça a flexão, volte e salte com os braços para cima.','Mantenha ritmo que você consiga sustentar.'], erros:'Fazer rápido e perder a forma na flexão.'},
 {id:'parada-mao-parede', nome:'Parada de mão na parede', cat:'Empurrar', nivel:'Intermediário', equip:'Nenhum', musculos:['Ombros','Core'], anim:'parada-mao', passos:['Mãos no chão, suba os pés pela parede.','Cabeça entre os braços, corpo reto.','Comece com 10 a 20 segundos.'], erros:'Costas arqueadas ou cabeça fora do alinhamento.'},
 {id:'hollow', nome:'Hollow hold', cat:'Core', nivel:'Iniciante', equip:'Nenhum', musculos:['Core'], anim:'padrao', passos:['Deite, braços estendidos acima da cabeça.','Eleve pernas e ombros, lombar colada no chão.','Segure sem deixar a lombar sair do chão.'], erros:'Lombar arqueando — dobre os joelhos para facilitar.'},
 {id:'alongamento', nome:'Mobilidade de quadril e ombros', cat:'Mobilidade', nivel:'Iniciante', equip:'Nenhum', musculos:['Mobilidade'], anim:'padrao', passos:['5 minutos de rotações de ombro, quadril e tornozelo.','Alongue o que estiver travado, sem forçar.','Faça antes e depois do treino.'], erros:'Pular o aquecimento e ir direto para o esforço máximo.'},
];

const TREINOS = [
 {id:'fundamentos', nome:'Fundamentos — 20 min', nivel:'Iniciante', local:'Nenhum', desc:'Para começar do zero, sem equipamento.', itens:['alongamento','agachamento','flexao-inclinada','barra-australiana','prancha','hollow']},
 {id:'push', nome:'Empurrar — peito, ombro e tríceps', nivel:'Intermediário', local:'Paralelas', desc:'Flexão, mergulho e parada de mão.', itens:['flexao','mergulho','parada-mao-parede','prancha']},
 {id:'pull', nome:'Puxar — costas e bíceps', nivel:'Intermediário', local:'Barra', desc:'Barra australiana até barra fixa.', itens:['barra-australiana','barra-fixa','hollow']},
 {id:'pernas-core', nome:'Pernas + Core', nivel:'Iniciante', local:'Nenhum', desc:'Só chão, treino completo de base.', itens:['agachamento','afundo','prancha','prancha-lateral','burpee']},
 {id:'mobilidade', nome:'Mobilidade — 10 min', nivel:'Iniciante', local:'Nenhum', desc:'Para dias de descanso ativo.', itens:['alongamento','hollow','prancha']},
];

const SKILLS = [
 {nome:'Barra fixa (primeira)', degraus:['Barra australiana 3x12','Barra com salto e descida lenta 5x5','Barra com elástico / assistida','Barra fixa 1 rep — depois 3x5']},
 {nome:'Muscle-up', degraus:['Barra fixa 3x10','Barra explosiva até o peito','Transição com apoio baixo','Muscle-up completo']},
 {nome:'Parada de mão', degraus:['Prancha 60s','Parada de mão na parede 30s','Equilíbrio com saída da parede','Parada de mão livre']},
 {nome:'Front lever', degraus:['Barra australiana forte','Hollow hold 30s','Tuck front lever','Front lever avançado']},
 {nome:'Planche', degraus:['Flexão 3x20','Pseudo flexão','Tuck planche','Planche com pernas estendidas']},
];

let progresso = JSON.parse(localStorage.getItem('calistenia_progresso') || '{"treinos":0,"series":0,"datas":[],"historico":[],"musculos":{}}');
let treinoAtual=null, indiceAtual=0, serieAtual=1, timerId=null;

function salvar(){ localStorage.setItem('calistenia_progresso', JSON.stringify(progresso)); atualizarProgresso(); }
function ex(id){ return EXERCICIOS.find(e=>e.id===id); }

function cardTreino(t){
  const d=document.createElement('div'); d.className='card';
  d.innerHTML=`<h3>${t.nome}</h3><span class="tag nivel">${t.nivel}</span> <span class="tag">${t.local==='Nenhum'?'Sem equipamento':t.local}</span><p>${t.desc}</p><p>${t.itens.map(i=>ex(i).nome).join(' • ')}</p><button>Iniciar treino →</button>`;
  d.querySelector('button').onclick=()=>iniciarTreino(t);
  return d;
}
function renderTreinos(){
  const nivel=document.getElementById('filtroNivel').value, local=document.getElementById('filtroLocal').value;
  const lista=document.getElementById('listaTreinos'); lista.innerHTML='';
  TREINOS.filter(t=>(nivel==='todos'||t.nivel===nivel)&&(local==='todos'||t.local===local||local==='Nenhum'&&t.local==='Nenhum')).forEach(t=>lista.appendChild(cardTreino(t)));
  if(!lista.children.length) lista.innerHTML='<p>Nenhum treino com esse filtro. Limpe o filtro de local.</p>';
}
function renderExercicios(cat='todos'){
  const q=(document.getElementById('buscaEx').value||'').toLowerCase();
  const lista=document.getElementById('listaExercicios'); lista.innerHTML='';
  EXERCICIOS.filter(e=>(cat==='todos'||e.cat===cat)&&(e.nome.toLowerCase().includes(q))).forEach(e=>{
    const d=document.createElement('div'); d.className='card';
    d.innerHTML=`<h3>${e.nome}</h3><span class="tag nivel">${e.nivel}</span> <span class="tag">${e.cat}</span> <span class="tag">${e.equip}</span><p><strong>Músculos:</strong> ${e.musculos.join(', ')}</p><button>Ver boneco e passos →</button>`;
    d.querySelector('button').onclick=()=>abrirExercicio(e);
    lista.appendChild(d);
  });
}
function renderSkills(){
  const lista=document.getElementById('listaSkills'); lista.innerHTML='';
  SKILLS.forEach(s=>{
    const d=document.createElement('div'); d.className='card';
    d.innerHTML=`<h3>${s.nome}</h3><ol>${s.degrays.map(x=>`<li>${x}</li>`).join('')}</ol>`;
    lista.appendChild(d);
  });
}
function atualizarProgresso(){
  document.getElementById('statTreinos').textContent=progresso.treinos;
  document.getElementById('statSeries').textContent=progresso.series;
  const streak=new Set(progresso.datas).size;
  document.getElementById('statStreak').textContent=streak+' dias';
  document.getElementById('streakBox').textContent='🔥 '+streak+' dias';
  document.getElementById('statUltimo').textContent=progresso.historico.length?progresso.historico[progresso.historico.length-1]:'Nenhum ainda';
  document.getElementById('historico').innerHTML=progresso.historico.map(h=>`<li>${h}</li>`).join('') || '<li>Nenhum treino registrado ainda.</li>';
  const mapa=document.getElementById('mapaMuscular'); mapa.innerHTML='';
  ['Peito','Costas','Pernas','Core','Ombros','Tríceps','Bíceps','Glúteos'].forEach(m=>{
    const n=progresso.musculos[m]||0; const s=document.createElement('span'); s.className=n>=10?'forte':n>=3?'medio':''; s.textContent=m+' ('+n+')'; mapa.appendChild(s);
  });
}
function mostrarPlayer(titulo, sub, e){
  document.querySelectorAll('.aba').forEach(a=>a.classList.remove('ativa'));
  const p=document.getElementById('player'); p.classList.remove('escondido');
  document.getElementById('playerTitulo').textContent=titulo;
  document.getElementById('playerSub').textContent=sub;
  document.querySelector('.palco').className='palco anim-'+e.anim;
  document.getElementById('playerPassos').innerHTML='<h3>Como fazer</h3><ol>'+e.passos.map(x=>`<li>${x}</li>`).join('')+'</ol>';
  document.getElementById('playerErros').innerHTML='<p><strong>Erro comum:</strong> '+e.erros+'</p>';
  window.scrollTo({top:0, behavior:'smooth'});
}
function abrirExercicio(e){ treinoAtual=null; mostrarPlayer(e.nome, e.cat+' • '+e.nivel+' • '+e.equip, e); document.getElementById('serieTotal').textContent='3'; serieAtual=1; document.getElementById('serieAtual').textContent='1'; document.getElementById('btnProximo').style.display='none'; document.getElementById('btnConcluirTreino').style.display='none'; }
function iniciarTreino(t){ treinoAtual=t; indiceAtual=0; mostrarExTreino(); }
function mostrarExTreino(){
  const e=ex(treinoAtual.itens[indiceAtual]); serieAtual=1;
  mostrarPlayer(treinoAtual.nome+' — '+(indiceAtual+1)+'/'+treinoAtual.itens.length, e.nome+' • '+e.cat, e);
  document.getElementById('serieTotal').textContent='3'; document.getElementById('serieAtual').textContent='1';
  document.getElementById('btnProximo').style.display='inline-block'; document.getElementById('btnConcluirTreino').style.display='inline-block';
}
document.getElementById('btnSerie').onclick=()=>{
  progresso.series++; serieAtual++;
  const e=treinoAtual?ex(treinoAtual.itens[indiceAtual]):null;
  if(e) e.musculos.forEach(m=>progresso.musculos[m]=(progresso.musculos[m]||0)+1);
  if(serieAtual>3) serieAtual=3;
  document.getElementById('serieAtual').textContent=serieAtual; salvar();
};
document.getElementById('btnDescanso').onclick=()=>{
  let s=60; clearInterval(timerId); document.getElementById('timer').textContent='Descanso: 60s';
  timerId=setInterval(()=>{ s--; document.getElementById('timer').textContent='Descanso: '+s+'s'; if(s<=0){ clearInterval(timerId); document.getElementById('timer').textContent='Descanso concluído — bora!'; } },1000);
};
document.getElementById('btnProximo').onclick=()=>{
  if(!treinoAtual) return;
  if(indiceAtual<treinoAtual.itens.length-1){ indiceAtual++; mostrarExTreino(); } else { alert('Último exercício! Conclua o treino.'); }
};
document.getElementById('btnConcluirTreino').onclick=()=>{
  if(!treinoAtual) return;
  progresso.treinos++; const hoje=new Date().toISOString().slice(0,10); if(!progresso.datas.includes(hoje)) progresso.datas.push(hoje);
  progresso.historico.push(treinoAtual.nome+' — '+new Date().toLocaleDateString('pt-BR')); salvar(); alert('Treino concluído! 💪'); fecharPlayer();
};
function fecharPlayer(){ document.getElementById('player').classList.add('escondido'); document.querySelectorAll('.aba').forEach(a=>a.classList.remove('ativa')); document.getElementById('aba-treinos').classList.add('ativa'); document.querySelectorAll('.abas button').forEach(b=>b.classList.toggle('ativo', b.dataset.aba==='treinos')); clearInterval(timerId); }
document.getElementById('fecharPlayer').onclick=fecharPlayer;
document.querySelectorAll('.abas button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.abas button').forEach(x=>x.classList.remove('ativo')); b.classList.add('ativo');
  document.querySelectorAll('.aba').forEach(a=>a.classList.remove('ativa')); document.getElementById('aba-'+b.dataset.aba).classList.add('ativa'); document.getElementById('player').classList.add('escondido');
});
document.getElementById('filtroNivel').onchange=renderTreinos; document.getElementById('filtroLocal').onchange=renderTreinos;
document.getElementById('buscaEx').oninput=()=>renderExercicios(document.querySelector('#filtrosCat button.ativo').dataset.cat);
document.querySelectorAll('#filtrosCat button').forEach(b=>b.onclick=()=>{ document.querySelectorAll('#filtrosCat button').forEach(x=>x.classList.remove('ativo')); b.classList.add('ativo'); renderExercicios(b.dataset.cat); });
document.getElementById('limparProgresso').onclick=()=>{ if(confirm('Limpar todo o progresso?')){ progresso={treinos:0,series:0,datas:[],historico:[],musculos:{}}; salvar(); } };
renderTreinos(); renderExercicios(); renderSkills(); atualizarProgresso();
