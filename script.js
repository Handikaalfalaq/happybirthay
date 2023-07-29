function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.style.animation = 'openEnvelopeAnim 1s forwards';
    showBirthdayMessage();
}

function showBirthdayMessage() {
    const message = document.querySelector('.message');
    setTimeout(() => {
        message.classList.remove('hidden');
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 1000);
}

function lightCandles() {
    const candles = document.querySelectorAll('.candle');
    for (const candle of candles) {
        candle.style.animation = 'candleMove 1.5s infinite';
    }
}

function turnOffCandles() {
    const candles = document.querySelectorAll('.candle');
    for (const candle of candles) {
        candle.style.animation = 'none';
    }
}
