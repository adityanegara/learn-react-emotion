import styled from '@emotion/styled';

const DuplicateStyled = () =>{
    const Section = styled('section')({
        backgroundColor: 'turquoise',
        color: 'salmon'
    })

    const Aside = Section.withComponent('aside');

    return(
        <>
            <Section>This is a section</Section>
            <Aside>This is an aside</Aside>
        </>
    )
}

export default DuplicateStyled;