const container = document.getElementById("heart-container");
        const text = "Fer";
        const numElements = 150;
        const speed = 0.002;
        let spans = [];
        
        function heartShape(t, scale) {
            const x = 16 * Math.pow(Math.sin(t), 3) * scale;
            const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale;
            return { x, y: -y };
        }
        
        function getScaleFactor() {
            return Math.min(window.innerWidth, window.innerHeight) / 40;
        }
        
        function createHeart() {
            spans.forEach(span => span.remove());
            spans = [];
            let scale = getScaleFactor();
            
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < numElements; i++) {
                let span = document.createElement("span");
                span.className = "text";
                span.innerText = text;
                fragment.appendChild(span);
                spans.push(span);
            }
            container.appendChild(fragment);
        }
        
        let tOffset = 0;
        function animateHeart() {
            tOffset += speed;
            let scale = getScaleFactor();
            spans.forEach((span, i) => {
                let pos = heartShape(i * 0.2 + tOffset, scale);
                span.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            });
            requestAnimationFrame(animateHeart);
        }
        
        window.addEventListener("resize", createHeart);
        createHeart();
        animateHeart();
