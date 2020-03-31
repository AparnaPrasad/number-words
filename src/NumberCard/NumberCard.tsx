import React, { useState } from 'react';
import { InputGroup, FormControl, Card } from 'react-bootstrap';

type T_TextColor = 'text-danger' | 'text-warning' | 'text-dark'

const NumberCard = () => {
    const [numberWord, setNumberWord] = useState('');
    const [textClass, setTextClass] = useState<T_TextColor>('text-dark')
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const inWords = (number: string) => {
        const num = number;

        if (num === '0') {
            setNumberWord('zero');
            setTextClass('text-dark');
            return;
        }

        const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

        if (!n) {
            setNumberWord('error');
            setTextClass('text-danger');
            return;
        }
        if (num.length > 5) {
            setNumberWord('overflow');
            setTextClass('text-warning');
            return
        }

        var str = '';
        str += (Number(n[3]) !== 0) ? (a[Number(n[3])] || b[Number(n[3][0])] + ' ' + a[Number(n[3][1])]) + 'thousand ' : '';
        str += (Number(n[4]) !== 0) ? (a[Number(n[4])] || b[Number(n[4][0])] + ' ' + a[Number(n[4][1])]) + 'hundred ' : '';
        str += (Number(n[5]) !== 0) ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[Number(n[5][0])] + ' ' + (str !== '' || Number(n[0]) !== 0 ? a[Number(n[5][1])] : '')) : '';

        setNumberWord(str);
        setTextClass("text-dark");
    }

    const textInputChange = (event: React.FormEvent<FormControl & HTMLInputElement>) => {
        event.persist()
        const val = (event.target as HTMLInputElement).value
        inWords(val)
    }

    return <Card className="row justify-content-center align-items-center shadow-sm" style={{ width: '30rem' }}>
        <Card.Body>
            <Card.Title>Number To Words Converter</Card.Title>
            <InputGroup>
                <FormControl
                    data-test-id='number-input-element-id'
                    placeholder="Enter number"
                    aria-label="number word"
                    aria-describedby="basic-addon1"
                    onChange={textInputChange}
                />
            </InputGroup>
            <div
                data-test-id='number-text-display-id'
                className={`${textClass} text-capitalize py-1`}>
                {numberWord}
            </div>
        </Card.Body>
    </Card>
}

export default NumberCard;