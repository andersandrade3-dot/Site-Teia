/* ============================================================
   TEIA 2026 — JAVASCRIPT & 3D WEBGL CORE
   Globo 3D Interativo Ativo desde o Início (Estilo Lusion.co):
   - O Globo Neural 3D com Logo Integrada aparece logo no início
   - Sem poluição visual, tela limpa com foco na experiência 3D
   - Rotação com mouse/toque em tempo real
   - Transição dinâmica no scroll para acompanhar os circuitos
   - Filtros do Cronograma Oficial e Roster dos 31 Protagonistas
   ============================================================ */

'use strict';

/* ─── DADOS OFICIAIS DOS ALUNOS PROTAGONISTAS (31 ALUNOS) ─── */
const CREW = [
  // Apresentação & Recepção
  { id: 'TEIA-01', nome: 'Emily', cat: 'cerimonial', cargo: 'Apresentadora Oficial', desc: 'Apresentação e condução oficial no Auditório', local: 'Auditório Principal' },
  { id: 'TEIA-02', nome: 'Daniele', cat: 'cerimonial', cargo: 'Apresentadora Oficial', desc: 'Cerimonial e abertura dos circuitos', local: 'Auditório Principal' },
  { id: 'TEIA-03', nome: 'Jailine', cat: 'cerimonial', cargo: 'Recepção & Hardware', desc: 'Acolhida e suporte técnico inicial', local: 'Entrada / Corredor' },
  { id: 'TEIA-04', nome: 'Gleydson', cat: 'cerimonial', cargo: 'Recepção & Montagem', desc: 'Credenciamento e montagem de PC', local: 'Entrada / Sala' },
  { id: 'TEIA-05', nome: 'Saulo', cat: 'cerimonial', cargo: 'Organizador', desc: 'Gestão da plenária e fluxo de convidados', local: 'Auditório Principal' },
  { id: 'TEIA-06', nome: 'Larissa', cat: 'cerimonial', cargo: 'Organizadora', desc: 'Recepção e suporte aos visitantes', local: 'Auditório Principal' },
  { id: 'TEIA-07', nome: 'Jaiane', cat: 'cerimonial', cargo: 'Vocal & Performance', desc: 'Abertura artística e musical', local: 'Auditório Principal' },

  // Circuito 1 — Hardware
  { id: 'TEIA-08', nome: 'Ednara', cat: 'hardware', cargo: 'Monitora Hardware', desc: 'Linha do Tempo dos computadores', local: 'Corredor / Redação' },
  { id: 'TEIA-09', nome: 'Pedro Henrique', cat: 'hardware', cargo: 'Monitor Histórico', desc: 'Evolução tecnológica e marcos dos PCs', local: 'Corredor Principal' },
  { id: 'TEIA-10', nome: 'Railson', cat: 'hardware', cargo: 'Especialista em Peças', desc: 'Exposição guiada de processadores e memórias', local: 'Corredor Principal' },
  { id: 'TEIA-11', nome: 'Raissa', cat: 'hardware', cargo: 'Painel Pedagógico', desc: 'Apresentação do Curso Técnico de Informática', local: 'Corredor Principal' },
  { id: 'TEIA-12', nome: 'Grazilele', cat: 'hardware', cargo: 'Painel Pedagógico', desc: 'Apresentação do Curso Técnico de Informática', local: 'Corredor Principal' },
  { id: 'TEIA-13', nome: 'Iris', cat: 'hardware', cargo: 'Painel de Carreiras', desc: 'Mercado de trabalho e oportunidades em TI', local: 'Corredor Principal' },
  { id: 'TEIA-14', nome: 'Hemile', cat: 'hardware', cargo: 'Painel de Carreiras', desc: 'Mercado de trabalho e oportunidades em TI', local: 'Corredor Principal' },
  { id: 'TEIA-15', nome: 'Lais', cat: 'hardware', cargo: 'Painel Tendências', desc: 'O Futuro da Inteligência Artificial', local: 'Corredor Principal' },
  { id: 'TEIA-16', nome: 'Hugo', cat: 'hardware', cargo: 'Painel Tendências', desc: 'O Futuro da Inteligência Artificial', local: 'Corredor Principal' },
  { id: 'TEIA-17', nome: 'Henrique', cat: 'hardware', cargo: 'Técnico de Bancada', desc: 'Desmontagem e montagem prática de PC ao vivo', local: 'Sala de Aula' },
  { id: 'TEIA-18', nome: 'Saulo F.', cat: 'hardware', cargo: 'Técnico de Bancada', desc: 'Desmontagem e montagem prática de PC ao vivo', local: 'Sala de Aula' },
  { id: 'TEIA-19', nome: 'Fulvio', cat: 'hardware', cargo: 'Técnico Multifuncional', desc: 'Montagem de computadores e pista de robótica', local: 'Sala / Redação' },

  // Circuito 2 — Código & Lógica
  { id: 'TEIA-20', nome: 'Clara', cat: 'programacao', cargo: 'Instrutora Portugol', desc: 'Ensino de lógica e algoritmos práticos', local: 'Lab. de Informática' },
  { id: 'TEIA-21', nome: 'Mark', cat: 'programacao', cargo: 'Instrutor Portugol', desc: 'Ensino de lógica e algoritmos práticos', local: 'Lab. de Informática' },
  { id: 'TEIA-22', nome: 'Vitória', cat: 'programacao', cargo: 'Monitora de Código', desc: 'Suporte aos programas desenvolvidos pelos visitantes', local: 'Lab. de Informática' },
  { id: 'TEIA-23', nome: 'Luyanne', cat: 'programacao', cargo: 'Juíza de Lógica', desc: 'Desafio prático da Torre de Copos', local: 'Lab. de Informática' },
  { id: 'TEIA-24', nome: 'Kilvia', cat: 'programacao', cargo: 'Juíza de Lógica', desc: 'Desafio prático da Torre de Copos', local: 'Lab. de Informática' },
  { id: 'TEIA-25', nome: 'Thales', cat: 'programacao', cargo: 'Monitor de Desafio', desc: 'Desafio prático da Torre de Copos', local: 'Lab. de Informática' },
  { id: 'TEIA-26', nome: 'Ivily', cat: 'programacao', cargo: 'Monitora de Lógica', desc: 'Painéis interativos de lógica de programação', local: 'Lab. / Corredor' },

  // Circuito 3 — Robótica
  { id: 'TEIA-27', nome: 'Joabe', cat: 'robotica', cargo: 'Piloto & Operador', desc: 'Operação dos carrinhos e controle na pista', local: 'Sala de Redação' },
  { id: 'TEIA-28', nome: 'Kevile', cat: 'robotica', cargo: 'Piloto & Operadora', desc: 'Operação dos carrinhos e controle na pista', local: 'Sala de Redação' },
  { id: 'TEIA-29', nome: 'Hugo G.', cat: 'robotica', cargo: 'Monitor de Pista', desc: 'Orientação aos visitantes nas corridas', local: 'Sala de Redação' },
  { id: 'TEIA-30', nome: 'Lino', cat: 'robotica', cargo: 'Engenheiro de Robôs', desc: 'Construção, calibração e eletrônica dos robôs', local: 'Sala de Redação' },
  { id: 'TEIA-31', nome: 'Evanio', cat: 'robotica', cargo: 'Engenheiro de Robôs', desc: 'Construção, calibração e eletrônica dos robôs', local: 'Sala de Redação' },
  { id: 'TEIA-32', nome: 'Lucas', cat: 'robotica', cargo: 'Técnico Desmontagem', desc: 'Explicação didática dos motores e engrenagens', local: 'Sala de Redação' },
  { id: 'TEIA-33', nome: 'Mirela', cat: 'robotica', cargo: 'Líder de Arena', desc: 'Organização dos tempos de pista e baterias', local: 'Sala de Redação' },

  // Oficina Web com IA
  { id: 'TEIA-34', nome: 'Otavio', cat: 'webia', cargo: 'Instrutor Web & IA', desc: 'Criação de páginas Web assistidas por IA', local: 'Lab. de Informática' },
  { id: 'TEIA-35', nome: 'Victor Hugo', cat: 'webia', cargo: 'Instrutor Web & IA', desc: 'Criação de páginas Web assistidas por IA', local: 'Lab. de Informática' },
  { id: 'TEIA-36', nome: 'Ismael', cat: 'webia', cargo: 'Mentor de Código', desc: 'Mentoria em desenvolvimento HTML/CSS e IA', local: 'Lab. de Informática' },
  { id: 'TEIA-37', nome: 'Luzia', cat: 'webia', cargo: 'Mentora de Código', desc: 'Mentoria em desenvolvimento HTML/CSS e IA', local: 'Lab. de Informática' },

  // Apoio Geral
  { id: 'TEIA-38', nome: 'Thiago', cat: 'apoio', cargo: 'Infra & Redes', desc: 'Cabeamento, rede local e suporte audiovisual', local: 'Geral' },
  { id: 'TEIA-39', nome: 'Iasmyn', cat: 'apoio', cargo: 'Apoio Logístico', desc: 'Credenciamento, kits e acolhimento', local: 'Geral' }
];

/* ─── UTILITÁRIOS ─── */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const lerp = (a, b, t) => a + (b - a) * t;

/* ═════════════════════════════════════════════════════════════════════════
   01 // GLOBO 3D WEBGL INTERATIVO COM LOGO TEIA INCORPORADA (DESDE O INÍCIO)
   ═════════════════════════════════════════════════════════════════════════ */
let triggerEnergyBurst = null;

(function init3DExperience() {
  const canvas = $('#webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030303, 0.04);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 8.5);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Iluminação Global e Direcional
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  const redLight = new THREE.PointLight(0xff1e42, 4.2, 25);
  redLight.position.set(4, 3, 5);
  scene.add(redLight);

  const rimLight = new THREE.PointLight(0x8b0000, 3.0, 20);
  rimLight.position.set(-5, -3, -2);
  scene.add(rimLight);

  /* ══════════════════════════════════════════════════════════════════
     GLOBO NEURAL 3D INTERATIVO (CENTRO DO HERO DESDE O 1º SEGUNDO)
     ══════════════════════════════════════════════════════════════════ */
  const globeCoreGroup = new THREE.Group();
  scene.add(globeCoreGroup);

  // 1. Núcleo Icosaedro Interno Facetado
  const innerGeo = new THREE.IcosahedronGeometry(1.65, 2);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0x140205,
    emissive: 0x5a000d,
    specular: 0xff1e42,
    shininess: 90,
    flatShading: true,
    transparent: true,
    opacity: 0.92
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  globeCoreGroup.add(innerMesh);

  // 2. Wireframe Cage Externo (Estrutura Cibernética da Rede TEIA)
  const wireGeo = new THREE.IcosahedronGeometry(1.98, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xff1e42,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  globeCoreGroup.add(wireMesh);

  // 3. Anéis Orbitais do Globo (Giroscópio Dinâmico)
  const ringGeo1 = new THREE.TorusGeometry(2.65, 0.025, 16, 100);
  const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xff1e42, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3;
  globeCoreGroup.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(3.25, 0.018, 16, 100);
  const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x8b0000, transparent: true, opacity: 0.5 });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 4;
  ring2.rotation.x = -Math.PI / 6;
  globeCoreGroup.add(ring2);

  // 4. Nuvem de Partículas Neurais (700 nós orbitantes)
  const particleCount = 700;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 2.2 + Math.random() * 4.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    particlePos[i] = r * Math.sin(phi) * Math.cos(theta);
    particlePos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePos[i + 2] = r * Math.cos(phi);
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xff2a4b,
    size: 0.045,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });
  const particleSystem = new THREE.Points(particleGeo, particleMat);
  globeCoreGroup.add(particleSystem);

  // O GLOBO COMEÇA NO PALCO DIREITO NO DESKTOP, DEIXANDO A LOGO EM DESTAQUE NO FUNDO PRETO
  const isSmallInitial = window.innerWidth < 900;
  globeCoreGroup.scale.set(isSmallInitial ? 0.85 : 1.15, isSmallInitial ? 0.85 : 1.15, isSmallInitial ? 0.85 : 1.15);
  globeCoreGroup.position.set(isSmallInitial ? 0 : 1.95, isSmallInitial ? -0.2 : 0, isSmallInitial ? -0.8 : 0.6);
  globeCoreGroup.visible = true;

  /* -------------------------------------------------------------
     FÍSICA DO MOUSE, TOQUE E SCROLL TRACKING
     ------------------------------------------------------------- */
  let mouseX = 0, mouseY = 0;
  let targetRotX = 0, targetRotY = 0;
  let currentRotX = 0, currentRotY = 0;
  let isDragging = false;
  let prevMouseX = 0, prevMouseY = 0;
  let scrollProgress = 0;
  let speedMultiplier = 1;

  // Disparo de Energia (Hover de monólitos ou clique)
  triggerEnergyBurst = function() {
    targetRotY += Math.PI * 2;
    speedMultiplier = 3.5;
    redLight.intensity = 7;
    innerMat.emissive.setHex(0xff1e42);

    setTimeout(() => {
      speedMultiplier = 1;
      redLight.intensity = 4.2;
      innerMat.emissive.setHex(0x5a000d);
    }, 1200);
  };

  window.addEventListener('mousemove', e => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;
    mouseX = nx;
    mouseY = ny;

    if (isDragging) {
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      targetRotY += deltaX * 0.01;
      targetRotX += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    }
  });

  window.addEventListener('mousedown', e => {
    if (e.target.closest('a, button, input, iframe, .monolith, .crono-item, .escola-card')) return;
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
    document.body.classList.add('cursor-active');
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.classList.remove('cursor-active');
  });

  // Suporte a Toque Mobile e Tablet
  window.addEventListener('touchstart', e => {
    if (e.target.closest('a, button, input, iframe, .monolith, .crono-item, .escola-card')) return;
    isDragging = true;
    prevMouseX = e.touches[0].clientX;
    prevMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - prevMouseX;
    const deltaY = e.touches[0].clientY - prevMouseY;
    targetRotY += deltaX * 0.012;
    targetRotX += deltaY * 0.012;
    prevMouseX = e.touches[0].clientX;
    prevMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Atualização do Progresso da Barra Lateral
  window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    const bar = $('.tracker-bar');
    const phase = $('.tracker-phase');
    if (bar) bar.style.height = (scrollProgress * 100) + '%';
    if (phase) {
      const p = Math.min(7, Math.floor(scrollProgress * 7) + 1);
      phase.textContent = `0${p} / 07`;
    }
  }, { passive: true });

  // Reação dos Monólitos
  $$('.monolith').forEach(m => {
    m.addEventListener('mouseenter', () => {
      speedMultiplier = 3;
      redLight.intensity = 6.5;
      innerMat.emissive.setHex(0xc41230);
    });
    m.addEventListener('mouseleave', () => {
      speedMultiplier = 1;
      redLight.intensity = 4.2;
      innerMat.emissive.setHex(0x5a000d);
    });
  });

  /* -------------------------------------------------------------
     LOOP DE ANIMAÇÃO A 60 FPS COM COREOGRAFIA DE SCROLL LUSION
     ------------------------------------------------------------- */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Rotação suave contínua
    targetRotY += 0.0035 * speedMultiplier;
    targetRotX += 0.0015 * speedMultiplier;

    currentRotX = lerp(currentRotX, targetRotX + mouseY * 0.35, 0.08);
    currentRotY = lerp(currentRotY, targetRotY + mouseX * 0.35, 0.08);

    globeCoreGroup.rotation.x = currentRotX;
    globeCoreGroup.rotation.y = currentRotY;

    const isSmall = window.innerWidth < 900;

    // Pulso dinâmico do núcleo cibernético
    const scalePulse = 1 + Math.sin(elapsedTime * 1.8) * 0.035;
    wireMesh.scale.set(1 / scalePulse, 1 / scalePulse, 1 / scalePulse);

    // Parallax 3D suave com o mouse na Logo Oficial (ancorada no fundo preto)
    const heroIdentityLogo = document.getElementById('heroIdentityLogo');
    if (heroIdentityLogo && window.innerWidth >= 900) {
      const tiltX = (mouseX * 6).toFixed(2);
      const tiltY = (-mouseY * 6).toFixed(2);
      heroIdentityLogo.style.transform = `perspective(800px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
    }

    // Escala dinâmica no scroll (Lusion-style zoom no Hero e transição)
    const baseScale = isSmall ? 0.85 : 1.15;
    const targetScale = scrollProgress < 0.18
      ? baseScale * (1.0 + (scrollProgress / 0.18) * 0.25)
      : baseScale * (1.0 + Math.sin(elapsedTime * 1.5) * 0.02);

    globeCoreGroup.scale.set(
      targetScale * scalePulse,
      targetScale * scalePulse,
      targetScale * scalePulse
    );

    // Deslocamento orquestrado do Globo 3D:
    // No Hero (scrollProgress < 0.18): Fica posicionado à direita (x = 1.95),
    // deixando a logo em destaque sobre o fundo escuro/preto no lado esquerdo
    const targetX = isSmall ? 0 : (
      scrollProgress < 0.18
        ? 1.95
        : scrollProgress < 0.65
        ? lerp(1.95, -1.85, (scrollProgress - 0.18) * 2.1)
        : lerp(-1.85, 0, (scrollProgress - 0.65) * 2.8)
    );

    const targetY = scrollProgress < 0.18 ? 0 : (scrollProgress < 0.65 ? -0.2 : 0);
    const targetZ = isSmall ? -0.8 : (scrollProgress < 0.18 ? 0.6 : -0.5);

    globeCoreGroup.position.x = lerp(globeCoreGroup.position.x, targetX, 0.08);
    globeCoreGroup.position.y = lerp(globeCoreGroup.position.y, targetY, 0.08);
    globeCoreGroup.position.z = lerp(globeCoreGroup.position.z, targetZ, 0.08);

    // Anéis orbitais giram
    ring1.rotation.z = elapsedTime * 0.45;
    ring2.rotation.z = -elapsedTime * 0.35;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Responsivo
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
})();

/* ═════════════════════════════════════════════════════════════════════════
   02 // FILTROS E COMPORTAMENTO DO CRONOGRAMA DE ATIVIDADES
   ═════════════════════════════════════════════════════════════════════════ */
(function initCronograma() {
  const tabs = $$('.crono-tab');
  const items = $$('.crono-item');

  if (!tabs.length || !items.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const period = tab.dataset.period; // 'all', 'morning', 'afternoon'

      items.forEach(item => {
        const itemPeriod = item.dataset.period;
        if (period === 'all' || itemPeriod === period) {
          item.style.display = 'grid';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          }, 30);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

/* ═════════════════════════════════════════════════════════════════════════
   03 // MENU MOBILE & NAVEGAÇÃO SUAVE
   ═════════════════════════════════════════════════════════════════════════ */
(function initNavigation() {
  const menuBtn = $('#mobileMenuBtn');
  const nav = $('#mainNav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open);
    });

    $$('.nav-item, .nav-btn', nav).forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

/* ═════════════════════════════════════════════════════════════════════════
   04 // GRID EDITORIAL DOS 31 PROTAGONISTAS (COM NOMES 100% NÍTIDOS)
   ═════════════════════════════════════════════════════════════════════════ */
(function initCrew() {
  const stream = $('#crewStream');
  const filterBtns = $$('.crew-pill');
  const modal = $('#crewModal');
  const modalBody = $('#modalBody');
  const modalX = $('#modalX');

  if (!stream) return;

  function render(filter = 'all') {
    const list = filter === 'all' ? CREW : CREW.filter(m => m.cat === filter);
    
    stream.innerHTML = list.map(m => `
      <div class="crew-card" data-cat="${m.cat}" data-id="${m.id}" tabindex="0" role="button" aria-label="${m.nome} — ${m.cargo}">
        <div class="card-inner">
          <div class="card-top">
            <span class="card-id">${m.id}</span>
            <span class="card-status-dot"></span>
          </div>
          <h3 class="card-name">${m.nome}</h3>
          <p class="card-role">${m.cargo}</p>
          <div class="card-footer">
            <span class="card-loc">${m.local}</span>
            <span class="card-arrow">&rarr;</span>
          </div>
        </div>
      </div>
    `).join('');

    $$('.crew-card', stream).forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  function openModal(id) {
    const m = CREW.find(x => x.id === id);
    if (!m || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-badge">${m.id} &bull; ${m.cat.toUpperCase()}</div>
      <h2 class="modal-name">${m.nome}</h2>
      <p class="modal-role">${m.cargo}</p>
      <div class="modal-divider"></div>
      <p class="modal-desc">${m.desc}</p>
      <div class="modal-loc"><strong>Local de Atuação:</strong> ${m.local}</div>
      <div class="modal-school">EEMTI Maria Alice Ramos Gomes &bull; Técnico em Informática</div>
    `;

    modal.hidden = false;
    modal.classList.add('open');
    if (modalX) modalX.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    setTimeout(() => { modal.hidden = true; }, 300);
  }

  if (modalX) modalX.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  render();
})();

/* ═════════════════════════════════════════════════════════════════════════
   05 // CONTAGEM REGRESSIVA PARA 23 DE OUTUBRO DE 2026
   ═════════════════════════════════════════════════════════════════════════ */
(function initCountdown() {
  const dVal = $('#d-val');
  const hVal = $('#h-val');
  const mVal = $('#m-val');
  const sVal = $('#s-val');

  if (!dVal || !hVal || !mVal || !sVal) return;

  const eventDate = new Date('2026-10-23T08:00:00-03:00').getTime();

  function update() {
    const now = Date.now();
    const diff = Math.max(0, eventDate - now);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    dVal.textContent = String(d).padStart(2, '0');
    hVal.textContent = String(h).padStart(2, '0');
    mVal.textContent = String(m).padStart(2, '0');
    sVal.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
})();

/* ═════════════════════════════════════════════════════════════════════════
   06 // CURSOR FLUIDO PERSONALIZADO (DESKTOP)
   ═════════════════════════════════════════════════════════════════════════ */
(function initCustomCursor() {
  const cursor = $('#cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let tx = cx, ty = cy;

  window.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function renderCursor() {
    cx = lerp(cx, tx, 0.16);
    cy = lerp(cy, ty, 0.16);
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(renderCursor);
  }

  renderCursor();

  $$('a, button, .monolith, .crono-item, .escola-card, .crew-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
})();
