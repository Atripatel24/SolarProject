import React from 'react'
import stamp from "../assets/stamp.png"



const ModelAgreeModel = ({ user }) => {
    return (
        <div>
            <div class="a4-page-agreement-container">
                <h3 style={{ color: "black", textDecoration: "underline", margin: "10px" }}> <center>Model Agreement</center></h3>
                <h4 className='center' style={{ textDecoration: "underline    " }}>Between</h4>
                <p><b>
                    Applicant and the registered/empanelled Vendor for installation of rooftop solar system in
                    residential house of the Applicant under simplified procedure of Rooftop Solar Programme Ph-II.
                </b> </p>
                <p>
                    This agreement is executed on {user.installation_date}
                    design, installation, commissioning, and five years comprehensive maintenance of a rooftop solar system
                    to be installed under simplified procedure of Rooftop Solar Programme Ph-II.
                </p>


                <h4 className='center'>Between</h4>
                {user.name} having residential electricity
                connection with consumer number {user.consumer_number} from {user.discom_name}   (DISCOM) at {user.discom_address}

                <p>
                    <h4 className='center'>And</h4>
                   Samarth Energy Solutions is registered/empanelled with the {user.discom_name}
                    (DISCOM) and is having registered/functional office at Second Floor Tirupati Complex Opp Lodha Market Near Mosam Pool Malegaon-423203
                </p>
                <h3 className='center'>Whereas</h3>
                <p>The Applicant intends to install rooftop solar system under simplified procedure of Rooftop Solar Programme
                    Ph-II of the MNRE.</p>
                <p>samarth energy solution is registered/empanelled vendor with DISCOM for installation of rooftop solar under MNRE Schemes.
                    The Vendor satisfies all the existing regulation pertaining to electrical safety and license in the
                    respective state and it is not debarred or blacklisted from undertaking any such installations by any
                    state/central Government agency.</p>
                <p>Both the parties are mutually agreed and understand their roles and responsibilities and have no liability to
                    any other agency/firm/stakeholder especially to DISCOM and MNRE.</p>


                <section>
                    <h3><b>1.</b> GENERAL TERMS:</h3>
                    <ul>
                        <li>
                            <b>1.1.</b>  The Applicant hereby represents and warrants that the Applicant has the sole legal capacity to
                            enter into this Agreement and authorise the construction, installation and commissioning of the
                            Rooftop Solar System (“RTS System”) which is inclusive of Balance of System (“BoS”) on the
                            Applicants premises (“Applicant Site”). The Vendor reserves its right to verify ownership of the
                            Applicant Site and Applicant covenants to co-operate and provide all information and documentation
                            required by the Vendor for the same.
                        </li>
                        <li>
                            <b> 1.2. </b>Vendor may propose changes to the scope, nature and or schedule of the services being performed
                            under this Agreement. All proposed changes must be mutually agreed between the Parties. If Parties
                            fail to agree on the variation proposed, either Party may terminate this Agreement by serving notice
                            as per Clause 13.
                        </li>
                        <li>
                            <b>1.3.</b>  The Applicant understands and agrees that future changes in load, electricity usage patterns
                            and/or electricity tariffs may affect the economics of the RTS System and these factors have not
                            been and cannot be considered in any analysis or quotation provided by Vendor or its Authorized
                            Persons (defined below).
                        </li>
                    </ul>
                </section>
                <section>
                    <h3><b>2.</b> RTS System</h3>
                    <ul>
                        <li><b>2.1.</b>Total capacity of the RTS System will be minimum
                            {user.total_capacity} kWp.
                        </li>
                        <li><b>2.2.</b>Solar modules, inverters, and BoS will conform to minimum specifications and DCR requirements of
                            MNRE.</li>
                        <li>
                            <b>2.3.</b>  Solar modules of {user.module_make} make &model, {user.total_capacity}Wp capacity each and
                            {user.efficiency}% efficiency will be procured and installed by the Vendor
                        </li>
                        <li>Solar inverter of {user.inverter_make} make & model,{user.total_capacity} kW rated output capacity will be
                            procured and installed by the samarth energy solution</li>
                        <li>
                            <b>2.5.</b> Module mounting structure has to withstand minimum wind load pressure as specified by MNRE.
                        </li>
                        <li><b>2.6.</b> Other BoS installations shall be as per best industry practice with all safety and protection
                            gears installed by the vendor.
                        </li>

                    </ul>
                </section>
                <section>
                    <h3><b>3.</b> Price and Payment Terms</h3>
                    <ol>
                        <p>
                            <b>3.1.</b>   The cost of RTS System will be Rs. {user.rupees}(to be decided
                            mutually).The Applicant shall pay the
                            total cost to the vendor as under:
                        </p>
                        <ul>
                            <li>{user.advance}% as an advance on confirmation of the order.</li>
                            <li>{user.before}% before dispatch of solar panels, inverters, and BoS items.</li>
                            <br />  <li>{user.after}% after installation and commissioning.</li>
                        </ul>
                        <p><b>3.2.</b> The order value and payment terms are fixed and will not be subject to any adjustment except as
                            approved in writing by Vendor. The payment shall be made only through bankers’ cheque / NEFT / RTGS /
                            online payment portal as intimated by Vendor. No cash payments shall be accepted by Vendor or its
                            Authorised Person.</p>
                    </ol>
                </section>
                <section>
                    <h3><b>4.</b> Representations made by the Applicant:</h3>
                    <p>The Applicant acknowledges and agrees that:</p>
                    <ol>
                        <li><b>4.1.</b> any timeline or schedule shared by Vendor for the provision of services and delivery of the
                            RTS System is only an estimate and Vendor will not be liable for any delay that is not
                            attributable to Vendor;</li>
                        <li><b>4.2.</b> all information disclosed by the Applicant to Vendor in connection with the supply of the RTS
                            System (or any part thereof), services and generation estimation (including, without limitation, the
                            load profile and power bill) are true and accurate, and acknowledges that Vendor has relied on the
                            information produced by the Applicant to customise the RTS System layout and BoS design for the
                            purposes of this Agreement;</li>
                        <li>
                            <b>4.3.</b>  all descriptive specifications, illustrations, drawings, data, dimensions, quotation, fact
                            sheets, price lists and any advertising material circulated/published/provided by Vendor are
                            approximate only;
                        </li>
                        <li><b>4.4.</b> any drawings, pre-feasibility report, specifications and plans composed by Vendor shall require
                            the Applicant’s approval within 5 (five) days of its receipt by electronic mail to Vendor and if the
                            Applicant does not respond within this period, the drawings, specifications or plans shall be final
                            and deemed to have been approved by the Applicant;</li>
                        <li><b>4.5.</b> the Applicant shall not use the RTS System or any part thereof, other than in accordance with
                            the product manufacturer’s specifications, and covenants that any risk arising from misuse or/and
                            misappropriate use shall be to the account of the Applicant alone.</li>

                        <li><b>4.6.</b> The Applicant represents, warrants and covenants that:
                            <ol>
                                <li>(i) all electrical and plumbing infrastructure at the Applicant Site are in conformity with
                                    applicable laws;</li>

                                <li>(ii) the Applicant has the legal capacity to permit unfettered access to Vendor and its
                                    Authorized Persons for the purposes of execution and performance of this Agreement;</li>

                                <li>
                                    (iii) the Applicant has and will provide requisite power, water and other requisite
                                    resources and storage facilities for construction, installation, operation and maintenance
                                    of the RTS System;
                                </li>
                                <li>
                                    the Applicant will provide support for site fabrication of structure, assembly and fitting
                                    of module mounting structure at Applicant Site;
                                </li>
                                <li>
                                    (v) the Applicant will ensure that the Applicant Site is shadow free and free of all
                                    encumbrances during the lifetime of the RTS System;
                                </li>
                                <li>(v) the Applicant will ensure that the Applicant Site is shadow free and free of all
                                    encumbrances during the lifetime of the RTS System;</li>
                                <li>(vi) Applicant should ensure that the Applicant regularly cleans and ensures accessibility
                                    and safety to the RTS System, as required by Vendor and dusting frequency in the premises.
                                </li>
                                <li>
                                    (vii) Vendor is entitled to permit geo-tagging of the Applicant Site as a Vendor installation site;
                                </li>
                                <li>
                                    (viii) Unless otherwise intimated by the Applicant in writing, Vendor is entitled to take photographs,
                                    videos and testimonials of the Applicant and the Applicant Site, and to create content which will become
                                    the property of Vendor and the same can be freely used by Vendor as part of its promotional and
                                    marketing activities across all platforms as it deems fit;
                                </li>
                                <li>
                                    (ix) the Applicant validates the stability of the Applicant Site for the installation of the RTS System.

                                </li>
                            </ol>

                        </li>
                    </ol>

                </section>
                <section>
                    <h3><b>5.</b> Maintenance</h3>
                    <ol>

                        <li><b>5.1.</b> Vendor shall provide five-year free workmanship maintenance. Vendor shall visit the
                            Applicant’s premises at least once every quarter after commissioning of the RTS System for
                            maintenance purposes.</li>
                        <li><b>5.2.</b> During such maintenance visit, Vendor shall check all nuts and bolts, fuses, earth resistance
                            and other consumables in respect of the RTS System to ensure that it is in good working
                            condition.
                        </li>
                        <li><b>5.3.</b>Cleaning requirement/expectation from the Applicant side – Applicant responsibility,
                            minimum expectation from Applicant that it will be cleaned regularly as per the dusting frequency.
                        </li>
                    </ol>
                </section>
                <section>
                    <h3><b>6.</b> Access and Right of Entry</h3>
                    <ol>
                        <p><b>6.1.</b>The Applicant hereby grants permission to Vendor and its authorized personnel,
                            representatives, associates, officers, employees, financing agents, subcontractors (“Authorized
                            Persons”) to enter the Applicant Site for the purposes of:</p>
                        <ol>
                            <li>(a) conducting feasibility study;</li>
                            <li>(b) storing the RTS System/any part thereof;</li>
                            <li>(c) installing the RTS System;</li>
                            <li>(d) inspecting the RTS System;</li>
                            <li>(e) conducting repairs and maintenance to the RTS System;</li>
                            <li>(f) removing the RTS System (or any part thereof), if necessary for any reason whatsoever;</li>
                            <li>(g) Such other matters as necessary to execute and perform its rights and obligations under
                                this Agreement.</li>
                        </ol>
                        <p>6.2. The Applicant shall ensure that third-party consents necessary for the Authorized Persons to
                            access the Applicant Site are obtained prior to commencement of services under this Agreement.</p>
                    </ol>
                </section>
                <section>
                    <h3><b>7.</b> Warranties</h3>
                    <ol>
                        <li>
                            <b>7.1.</b>  Product Warranty: The Applicant shall be entitled to manufacturers warranty. Any warranty
                            in relation to RTS System supplied to the Applicant by Vendor under this Agreement is limited
                            to the warranty given by the manufacturer of the RTS System (or any part thereof) to Vendor.
                        </li>
                        <li><b>7.2.</b> Installation Warranty: Vendor warrants that all installations shall be free from workmanship
                            defects or BOS defects for a period of five years from the date of installation of the RTS System. The
                            warranty is limited to Vendor rectifying the workmanship or BOS defects at Vendors expense in respect
                            of those defects reported by the Applicant, in writing. The Applicant is obliged and liable to report
                            such defects within 15 (fifteen) days of occurrence of
                            such defect.</li>
                        <li><b>7.3.</b> Subject to manufacturer warranty, Vendor warrants that the solar modules supplied herein shall have
                            tolerance within a five percentage range (+/-5%). The peak-power point voltage and the peak-power point
                            current of any supplied solar module and/or any module string (series connected modules) shall not vary
                            by more than 5% (five percent) from the respective arithmetic means for all modules and/or for all
                            module strings, as the case may be, providedthe RTS System is properly maintained and the Applicant Site
                            is free from shadow at the time
                            of operation of the RTS System.

                        </li>

                        <li>
                            <b>7.4.</b>   Exceptions for warranty:
                            <ol>
                                <p>(a) Any attempt by any person other than Vendor or its Authorised Persons to adjust, modify, repair
                                    or provide maintenance to the RTS System, shall disentitle the Applicant of the warranty provided by
                                    Vendor hereunder.</p>
                                <p>(b) Vendor shall not be liable for any degeneration or damage to the RTS System due to any action or
                                    inaction on the part of the Applicant.</p>
                                <p>(c) Vendor shall not be bound or liable to remedy any damage, fault, failure or malfunction of the
                                    RTS System owing to external causes, including but not limited to accidents, misuse, neglect, if
                                    usage and/or storage and/or installation are non-confirming to product instructions, modifications
                                    by the Applicant leading to shading or accessibility issues, failure to perform required
                                    maintenance, normal wear and tear, Force Majeure Event, or negligence or default attributable to the
                                    Applicant.</p>
                                <p>(d) Vendor shall not be liable to repair or remedy any accessories or parts added to the RTS System that were not
                                    originally sourced by Vendor to the Applicant.
                                </p>
                            </ol>
                        </li>
                    </ol>
                </section>
                <section>
                    <h3><b>8.</b> Performance Guarantee</h3>
                    <ol>
                        <p>
                            8.1. Vendor guarantees minimum system performance ratio of 75% as per performance ratio test
                            carried out in adherence to IEC 61724 or equivalent BIS for a period of five years.
                        </p>
                    </ol>
                </section>
                <section>
                    <h3><b>9.</b> Insurance</h3>
                    <ol>
                        <p>
                            <b>9.1.</b>  Vendor may, at its sole discretion, obtain insurance covering risks of loss/damage to the RTS
                            System (any part thereof) during transit from Vendors warehouse until delivery to the
                            Applicant Site and until installation and commissioning.
                        </p>
                        <p>
                            <b>9.2.</b> Thereafter, all risk shall pass on to the Applicant and the Applicant may accordingly procure
                            relevant insurances.
                        </p>
                    </ol>
                </section>
                <section>
                    <h3><b>10.</b> Cancellation</h3>
                    <ol>
                        <li><b>10.1.</b> The Applicant may cancel the order placed on Vendor within 7 (seven) days from the
                            date of remittance of advance money or the date of order acceptance, whichever is earlier
                            (“Order Confirmation”) by serving notice as per Clause 13.</li>
                        <li><b>10.2.</b> If the Applicant cancels the order after the expiry of 7 (seven) days from the date of
                            Order Form, the Applicant shall be liable to pay Vendor, a cancellation fee of XX% of the total
                            order value plus costs and expenses incurred by Vendor, including, costs for labour, design, return
                            of products, administrative costs, subvention costs.</li>
                        <li>
                            <b>10.3.</b>  Notwithstanding the aforesaid, the Applicant shall not be entitled to cancel the Order Form
                            after Vendor has dispatched the RTS System (or any part thereof, including BOS) to the Applicant
                            Site. If Applicant chooses to terminate the Order Form after dispatch, the entire amount paid by the
                            Applicant till date, shall be forfeited by Vendor.
                        </li>
                    </ol>
                </section>
                <section>
                    <h3><b>11.</b> LIMITATION OF LIABILITY AND INDEMNITY:</h3>
                    <ol>
                        <p>
                            <b>11.1.</b>  To the extent that terms implied by law apply to the RTS System and the services
                            rendered under this Agreement, Vendors liability for any breach of those terms is limited to:
                            <p> (a) repairing or replacing the RTS System/any part thereof, as applicable; or</p>
                            <p>(b) Refund of the moneys paid the Applicant to Vendor, if Vendor cannot fulfil the order.</p>
                        </p>
                    </ol>
                </section>
                <section>
                    <h3>
                        <b> 12.</b>SUSPENSION AND TERMINATION:</h3>
                    <ol>
                        <li><b>12.1.</b> If the Applicant fails to pay any sum due under this Agreement on the due date, Vendor
                            may, in addition to its other rights under this Agreement, suspend its obligations under this Agreement
                            until all outstanding amounts (including interest due) are paid.</li>
                    </ol>
                </section>
                <section>
                    <h3><b>13.</b> Notices</h3>
                    <ol>
                        <li><b>13.</b> NOTICES: Any notice or other communication under this Agreement to Vendor and or to the Applicant,
                            shall be in writing, in English language and shall be delivered or sent: (a) by electronic mail and/or
                            (b) by hand delivery or registered post/courier, at the registered address of Applicant/Vendor.</li>
                    </ol>
                </section>
                <section>
                    <h3><b>14.</b> FORCE MAJEURE EVENT:</h3>
                    <ol>
                        <p>
                            <b> 14.1.</b>  Neither Party shall be in default due to any delay or failure to perform its/his/her/their
                            obligations under this Agreement which arises from or is a consequence of occurrence of an event which
                            is beyond the reasonable control of such Party, and which makes performance of its/his/her/their
                            obligations under this Agreement impossible or so impractical as reasonably to be considered impossible
                            in the circumstances, and includes, but is not limited to, war, riot, civil disorder, earthquake, fire,
                            explosion, storm, flood or other adverse weather conditions, pandemic, epidemic, embargo, strikes,
                            lockouts, labour difficulties, other industrial action, acts of government, unavailability of equipment
                            from vendor, changes requested by the Applicant (“Force Majeure Event”).
                        </p>
                    </ol>
                </section>
                <section>
                    <h3> <b>15.</b> GOVERNING LAW AND DISPUTE RESOLUTION:</h3>
                    <ul>
                        <li><b>15.1.</b> The interpretation and enforcement of this Agreement shall be governed by the laws
                            of India</li>
                        <li><b>15.2.</b> In the event of any dispute, controversy or difference between the Parties arising out
                            of, or relating to this Agreement (“Dispute”), both Parties shall make an effort to resolve the Dispute
                            in good faith, failing which, any Party to the Dispute shall be entitled to refer the Dispute to
                            arbitration to resolve the Dispute in the manner set out in this Clause. The rights and obligations of
                            the Parties under this Agreement shall remain in full force and effect pending the award in such
                            arbitration proceeding.</li>
                        <li>
                            <b>15.3.</b> The arbitration proceeding shall be governed by the provisions of the Arbitration and Conciliation
                            Act, 1996 and shall be settled by a sole arbitrator mutually appointed by the Parties.

                        </li>
                    </ul>
                </section>

                <div style={{display:"flex",justifyContent:"space-around"}} >
                    <div>
                    <img src={`https://admin.samarthenergysolution.com${user.signature}`} style={{ width: '200px', height: '100px' }} alt="signature" />
                        <label>Signature [consumer]</label>
                    </div>
                    <div>
                        <img src={stamp} alt="Stamp & Seal" style={{height:"100px",width:"200px"}} />
                        <label>Stamp [samarthenergysolution]</label>
                    </div>
                </div>
                <div className='inline-container'>
                    <div style={{ width: '50%' }}>
                        <div className='inline-container'>
                          
                            {user.name}
                        </div>


                    </div>

                    <div style={{ width: '50%' }}>
                        <div className='inline-container'>
                           
                            {user.shri}
                        </div>


                    </div>
                    <div  className='witness'>
                        <p>Witness :</p>
                        <p>1.</p>
                        <p>2.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ModelAgreeModel
