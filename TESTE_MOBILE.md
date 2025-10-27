# 📱 Guia Rápido de Teste Mobile - Portfólio

## Como Testar no Navegador (Chrome/Edge)

### Método 1: DevTools
1. Abra seu portfólio no navegador
2. Pressione `F12` ou `Ctrl+Shift+I` para abrir DevTools
3. Clique no ícone de dispositivos móveis ou pressione `Ctrl+Shift+M`
4. Selecione um dispositivo da lista (ex: iPhone 12 Pro, Galaxy S20)
5. Recarregue a página (`Ctrl+R`)

### Método 2: URL Direto
1. Abra o arquivo `index.html` diretamente no navegador
2. Redimensione a janela do navegador para menos de 768px de largura
3. O menu mobile deve aparecer automaticamente

## ✅ O que Testar

### Menu de Navegação
- [ ] Clicar no ícone ☰ (hamburger) abre o menu
- [ ] Menu aparece deslizando de cima para baixo
- [ ] Ícone muda de ☰ para ✕ quando menu está aberto
- [ ] Clicar em qualquer link fecha o menu
- [ ] Clicar fora do menu também fecha
- [ ] Página não rola enquanto menu está aberto

### Layout Responsivo
- [ ] Imagem de perfil aparece acima do texto no hero
- [ ] Botões ocupam largura total
- [ ] Projetos aparecem um por linha (não lado a lado)
- [ ] Skills estão organizadas verticalmente
- [ ] Footer está centralizado e organizado

### Interação Touch (no celular real)
- [ ] Botões respondem ao toque com feedback visual
- [ ] Links mudam de cor ao tocar
- [ ] Scroll é suave e responsivo
- [ ] Não há zoom indesejado ao tocar em inputs

### Diferentes Tamanhos
Teste em pelo menos 3 tamanhos:
- [ ] **Mobile pequeno** (360px) - iPhone SE
- [ ] **Mobile médio** (414px) - iPhone 12 Pro Max
- [ ] **Tablet** (768px) - iPad

### Orientação
- [ ] **Portrait** (vertical): Menu e layout funcionam
- [ ] **Landscape** (horizontal): Menu se ajusta
- [ ] Girar o dispositivo fecha o menu automaticamente

## 🔍 Elementos Específicos para Verificar

### 1. Header (Topo)
```
✓ Logo aparece reduzido mas legível
✓ Menu hamburger visível no canto direito
✓ Header fica fixo ao rolar
```

### 2. Seção Hero
```
✓ Foto de perfil centralizada
✓ Nome e título centralizados
✓ Botões empilhados verticalmente
✓ Estatísticas em coluna
```

### 3. Projetos
```
✓ Cards ocupam largura total
✓ Um projeto por linha
✓ Badges visíveis
✓ Links funcionam
```

### 4. Footer
```
✓ Informações centralizadas
✓ Links sociais acessíveis
✓ Botão "voltar ao topo" funciona
```

## 🌐 Testar em Dispositivos Reais

### Android
1. Ative o modo desenvolvedor no celular
2. Conecte via USB
3. Chrome DevTools > Remote Devices
4. Inspecione a página no celular

### iOS (iPhone/iPad)
1. Ative "Inspetor Web" no Safari (Ajustes > Safari > Avançado)
2. Conecte o iPhone/iPad via cabo
3. Abra Safari no Mac
4. Desenvolver > [Seu iPhone] > Página

### Ou simplesmente:
1. Envie o link do seu site para seu celular
2. Abra no navegador do celular
3. Teste todas as funcionalidades

## 🎯 Problemas Comuns e Soluções

### Menu não abre
- ✓ Verifique se o arquivo `mobile-enhancements.js` foi carregado
- ✓ Abra o console (F12) e procure por erros
- ✓ Limpe o cache do navegador (`Ctrl+Shift+Del`)

### Layout quebrado
- ✓ Força atualização (`Ctrl+F5`)
- ✓ Verifique se está em tela < 768px
- ✓ Desative extensões do navegador

### Elementos horizontais
- ✓ Reduza a largura da janela para menos de 600px
- ✓ Verifique se há CSS customizado interferindo
- ✓ Use DevTools para inspecionar o elemento

## 📊 Checklist Completo

### Visual
- [ ] Menu mobile aparece em telas < 768px
- [ ] Logo é legível
- [ ] Imagens carregam corretamente
- [ ] Cores e contrastes adequados
- [ ] Fontes legíveis sem zoom

### Funcional
- [ ] Todos os links funcionam
- [ ] Navegação suave entre seções
- [ ] Formulário de contato utilizável
- [ ] Botões de redes sociais funcionam
- [ ] Download de CV funciona

### Performance
- [ ] Página carrega em menos de 3s
- [ ] Scroll suave e sem travamentos
- [ ] Animações fluidas
- [ ] Sem erros no console

### Acessibilidade
- [ ] Texto legível (mínimo 16px)
- [ ] Botões têm tamanho mínimo 44x44px
- [ ] Contraste adequado
- [ ] Navegação por teclado funciona

## 🚀 Comando Rápido para Servidor Local

Se quiser testar com um servidor local:

```powershell
# No PowerShell, na pasta do projeto:
python -m http.server 8000

# Ou se tiver Node.js instalado:
npx http-server -p 8000
```

Depois acesse: `http://localhost:8000`

## 📱 QR Code para Teste Rápido

Você pode gerar um QR code do localhost para testar no celular:
1. Descubra seu IP local: `ipconfig` no PowerShell
2. Use: `http://[SEU-IP]:8000`
3. Gere QR code em: https://www.qr-code-generator.com/
4. Escaneie com o celular

---

**Dica**: Mantenha o DevTools aberto para ver o console e verificar se há erros JavaScript!
